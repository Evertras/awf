package commands

import (
	"testing"

	"github.com/Evertras/awf/lib/awfdata"
	"github.com/Evertras/awf/lib/awfdatautil"

	"github.com/Evertras/awf/lib/loaders"
)

func TestMoveWorksSimple(t *testing.T) {
	playerID := 3
	srcX := 0
	srcY := 0
	destX := 1
	destY := 2
	g, err := loaders.PrototypeGame()

	if err != nil {
		t.Fatal(err)
	}

	unit := &awfdata.Unit{
		Name:     "SampleMover",
		Owner:    uint32(playerID),
		Movement: 3,
	}

	sourceTile := awfdatautil.MapTileAt(g.Map, srcX, srcY)

	sourceTile.Unit = unit

	destinationTile := awfdatautil.MapTileAt(g.Map, destX, destY)

	// Just to be safe, clear it out
	destinationTile.Unit = nil

	cmd := &awfdata.CmdMove{
		Origin: &awfdata.Point{
			X: uint32(srcX),
			Y: uint32(srcY),
		},
		Destination: &awfdata.Point{
			X: uint32(destX),
			Y: uint32(destY),
		},
	}

	err = Move(cmd, playerID, g)

	if err != nil {
		t.Fatal(err)
	}

	if sourceTile.Unit != nil {
		t.Errorf("Expected source tile to be empty, but found unit named %q", sourceTile.Unit.Name)
	}

	if destinationTile.Unit == nil {
		t.Error("Expected destination tile to have unit, but none found")
	} else {
		u := destinationTile.Unit

		// Quick sanity check
		if u.Name != unit.Name {
			t.Errorf("Expected Name to be %q but was %q", unit.Name, u.Name)
		}
	}
}

func TestMoveErrorsGracefullyOnOutOfBoundsMoves(t *testing.T) {
	playerID := 3
	srcX := 0
	srcY := 0
	destX := 1
	destY := 2
	g, err := loaders.PrototypeGame()

	if err != nil {
		t.Fatal(err)
	}

	unit := &awfdata.Unit{
		Name:     "SampleMover",
		Owner:    uint32(playerID),
		Movement: 3,
	}

	sourceTile := awfdatautil.MapTileAt(g.Map, srcX, srcY)

	sourceTile.Unit = unit

	destinationTile := awfdatautil.MapTileAt(g.Map, destX, destY)

	// Just to be safe, clear it out
	destinationTile.Unit = nil

	// Now try to do bad moves
	cmds := []*awfdata.CmdMove{
		&awfdata.CmdMove{
			Origin: &awfdata.Point{
				X: g.Map.Width,
				Y: uint32(srcY),
			},
			Destination: &awfdata.Point{
				X: uint32(destX),
				Y: uint32(destY),
			},
		},
		&awfdata.CmdMove{
			Origin: &awfdata.Point{
				X: uint32(srcX),
				Y: g.Map.Height,
			},
			Destination: &awfdata.Point{
				X: uint32(destX),
				Y: uint32(destY),
			},
		},
		&awfdata.CmdMove{
			Origin: &awfdata.Point{
				X: uint32(srcX),
				Y: uint32(srcY),
			},
			Destination: &awfdata.Point{
				X: g.Map.Width,
				Y: uint32(destY),
			},
		},
		&awfdata.CmdMove{
			Origin: &awfdata.Point{
				X: uint32(srcX),
				Y: uint32(srcY),
			},
			Destination: &awfdata.Point{
				X: uint32(destX),
				Y: g.Map.Height,
			},
		},
	}

	for _, cmd := range cmds {
		err = Move(cmd, playerID, g)

		if err == nil {
			t.Errorf("Expected error but didn't get one when moving from (%d, %d) to (%d, %d)",
				cmd.Origin.X,
				cmd.Origin.Y,
				cmd.Destination.X,
				cmd.Destination.Y)
		}
	}
}
