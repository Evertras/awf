BINARY_NAME=awf
TS_FILES=$(shell find front/src -name "*.ts")
WASM_FILES=$(shell find lib -name "*.go" ! -path "lib/static/*" ! -path "lib/server/*")
GO_PROTO_BUILD_DIR=lib/awfdata
TEXTURE_PACKER=TexturePacker

all: test build

clean:
	rm -f $(BINARY_NAME)
	rm -f lib/static/build.go
	rm -f front/game.js
	rm -f front/game.js.map
	rm -f front/lib.wasm
	rm -rf $(GO_PROTO_BUILD_DIR)
	rm -rf messages/tsmessage

test: node_modules protos lib/static/build.go
	npx tslint -p .
	npm test
	go test -v ./lib/...

build: protos lib/static/build.go
	CG_ENABLED=0 go build -o $(BINARY_NAME) -v ./cmd/server/main.go

build-wasm: 
	GOARCH=wasm GOOS=js go build -o front/lib.wasm cmd/wasm/main.go

bench:
	go test -v -benchmem -bench . ./lib/...

run-dev: front/game.js lib/static/build.go
	go run -race ./cmd/server/main.go -d

docker: clean build
	docker build --rm -t evertras/$(BINARY_NAME) .

protos: $(GO_PROTO_BUILD_DIR) messages/tsmessage

# These are not files, so always run them when asked to
.PHONY: all clean test build bench run-dev protos

# Actual files/directories that must be generated
front/game.js: node_modules messages/tsmessage $(TS_FILES)
	npx webpack || (rm -f front/game.js && exit 1)

lib/static/build.go: front/lib.wasm front/game.js front/index.html front/style.css front/favicon.ico front/lib/* lib/static/generate.go front/assets/terrain.png front/assets/terrain.json
	go generate ./lib/static/

node_modules:
	npm install

$(GO_PROTO_BUILD_DIR): messages/*.proto
	rm -rf $(GO_PROTO_BUILD_DIR)
	mkdir $(GO_PROTO_BUILD_DIR)
	@# Slightly weird PWD syntax here to deal with Windows gitbash mangling it otherwise.
	@# This is intentional, don't remove the initial slash!
	docker run -v /${PWD}:/defs namely/protoc-all -d messages -l go -o $(GO_PROTO_BUILD_DIR) || (rm -rf $(GO_PROTO_BUILD_DIR) && exit 1)

messages/tsmessage: node_modules messages/*.proto
	rm -rf messages/tsmessage
	mkdir messages/tsmessage
	npx pbjs -t static-module -w commonjs messages/*.proto > messages/tsmessage/messages.js || (rm -rf messages/tsmessage && exit 1)
	npx pbts -o messages/tsmessage/messages.d.ts messages/tsmessage/messages.js || (rm -rf messages/tsmessage && exit 1)

front/lib.wasm: $(WASM_FILES) cmd/wasm/main.go
	GOARCH=wasm GOOS=js go build -o front/lib.wasm cmd/wasm/main.go

# These are a bit special for now... we don't want to make Texture Packer a raw dependency for anyone
# except for those editing the art, so don't erase these on clean.
front/assets/terrain.png front/assets/terrain.json: front/assets/raw/terrain/*
	$(TEXTURE_PACKER) --format pixijs4 \
	                  --sheet front/assets/terrain.png \
	                  --data front/assets/terrain.json \
	                  --algorithm Basic \
	                  --extrude 0 \
	                  --trim-mode None \
	                  --png-opt-level 0 \
	                  --disable-auto-alias \
	                  --shape-padding 2 \
	                  front/assets/raw/terrain
