BINARY_NAME=awf
TS_FILES=$(shell find front/src -name "*.ts")
GO_PROTO_BUILD_DIR=lib/awfdata

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
	go run -race ./cmd/server/main.go -d -t 3

docker: clean build
	docker build --rm -t evertras/$(BINARY_NAME) .

protos: $(GO_PROTO_BUILD_DIR) messages/tsmessage

# These are not files, so always run them when asked to
.PHONY: all clean test build bench run-dev proto

# Actual files/directories that must be generated
front/game.js: node_modules messages/tsmessage $(TS_FILES)
	npx webpack || (rm -f front/game.js && exit 1)

lib/static/build.go: front/lib.wasm front/game.js front/lib/* lib/static/generate.go
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

front/lib.wasm:
	GOARCH=wasm GOOS=js go build -o front/lib.wasm cmd/wasm/main.go
