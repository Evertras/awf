FROM golang:1.11-alpine AS go-builder

WORKDIR /go/src/github.com/Evertras/awf

COPY . .

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 \
	  go build -a -tags netgo \
	  -ldflags '-w -extldflags "-static"' \
	  -o /server \
	  ./cmd/server/main.go

FROM scratch

COPY --from=go-builder /server server

ENTRYPOINT ["/server"]
