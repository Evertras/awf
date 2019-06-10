package wasm

import (
	"context"

	"github.com/Evertras/awf/lib/awfdata"
)

//go:generate go run generate.go

type wasmServer struct{}

func (s *wasmServer) SayHello(ctx context.Context, req *awfdata.EchoRequest) (*awfdata.EchoResponse, error) {
	return &awfdata.EchoResponse{
		Text: req.Text + " (echo)",
	}, nil
}
