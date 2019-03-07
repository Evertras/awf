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

func TestMoveErrorsFromWrongPlayer(t *testing.T) {
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

	// Use the wrong player ID
	err = Move(cmd, playerID+1, g)

	if err == nil {
		t.Error("Expected to have an error, but didn't")
	}

	if sourceTile.Unit == nil {
		t.Error("Expected source tile to have unit, but found none")
	}

	if destinationTile.Unit != nil {
		t.Errorf("Expected destination tile to not have unit, but found one named %q", destinationTile.Unit.Name)
	}
}

func TestMoveErrorsFromOutOfRange(t *testing.T) {
	playerID := 3
	srcX := 0
	srcY := 0
	destX := 2
	destY := 2
	movement := 3 // need 4, so this should error
	g, err := loaders.PrototypeGame()

	if err != nil {
		t.Fatal(err)
	}

	unit := &awfdata.Unit{
		Name:     "SampleMover",
		Owner:    uint32(playerID),
		Movement: uint32(movement),
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

	if err == nil {
		t.Error("Expected to have an error, but didn't")
	}

	if sourceTile.Unit == nil {
		t.Error("Expected source tile to have unit, but found none")
	}

	if destinationTile.Unit != nil {
		t.Errorf("Expected destination tile to not have unit, but found one named %q", destinationTile.Unit.Name)
	}
}

func TestMoveOnlyOncePerTurn(t *testing.T) {
	playerID := 3
	srcX := 0
	srcY := 0
	destX := 1
	destY := 1
	movement := 3 // this is one more than required
	g, err := loaders.PrototypeGame()

	if err != nil {
		t.Fatal(err)
	}

	unit := &awfdata.Unit{
		Name:     "SampleMover",
		Owner:    uint32(playerID),
		Movement: uint32(movement),
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

	// Should be fine here
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

	// Now try to sneakily move again one square...
	cmd.Origin = cmd.Destination
	cmd.Destination = &awfdata.Point{
		X: cmd.Origin.X + 1,
		Y: cmd.Origin.Y,
	}

	// Sanity check to make sure we're testing the right thing
	if !awfdatautil.PointInside(cmd.Destination, g.Map) {
		t.Fatal("TEST BAD: Expected destination to be correct in test, test is wrong!")
	}

	err = Move(cmd, playerID, g)

	if err == nil {
		t.Error("Expected error, but got none")
	}
}
