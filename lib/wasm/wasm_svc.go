package wasm

import (
	"context"

	"github.com/Evertras/awf/lib/awfdata"
	"github.com/Evertras/awf/lib/awfdatautil"
	"github.com/Evertras/awf/lib/commands"
	"github.com/Evertras/awf/lib/loaders"
)

var inst instance

type wasmServer struct{}

func (s *wasmServer) Echo(ctx context.Context, req *awfdata.EchoRequest) (*awfdata.EchoResponse, error) {
	return &awfdata.EchoResponse{
		Text: req.Text + " (echo)",
	}, nil
}

func (s *wasmServer) GetGameState(ctx context.Context, req *awfdata.GetGameStateRequest) (*awfdata.GetGameStateResponse, error) {
	return &awfdata.GetGameStateResponse{
		State: inst.game,
	}, nil
}

func (s *wasmServer) InitPrototype(ctx context.Context, req *awfdata.InitPrototypeRequest) (*awfdata.InitPrototypeResponse, error) {
	g, err := loaders.PrototypeGame()

	if err != nil {
		return nil, err
	}

	inst = instance{
		game: g,
	}

	return &awfdata.InitPrototypeResponse{}, nil
}

func (s *wasmServer) GetPotentialMoves(ctx context.Context, req *awfdata.GetPotentialMovesRequest) (*awfdata.GetPotentialMovesResponse, error) {
	potentialMoves, err := awfdatautil.PotentialMoves(inst.game.Map, req.From)

	return &awfdata.GetPotentialMovesResponse{Moves: potentialMoves}, err
}

func (s *wasmServer) Move(ctx context.Context, req *awfdata.MoveRequest) (*awfdata.MoveResponse, error) {
	err := commands.Move(req.Cmd, 0, inst.game)

	return &awfdata.MoveResponse{}, err
}
