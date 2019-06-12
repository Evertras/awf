package commands

import (
	"testing"

	"github.com/Evertras/awf/lib/awfdata"
	"github.com/Evertras/awf/lib/awfdatautil"

	"github.com/Evertras/awf/lib/loaders"
)

func TestMoveWorksSimple(t *testing.T) {
	playerID := 3
	src := &awfdata.Point{X: 0, Y: 0}
	dest := &awfdata.Point{X: 1, Y: 2}
	g, err := loaders.PrototypeGame()

	if err != nil {
		t.Fatal(err)
	}

	unit := &awfdata.Unit{
		Name:     "SampleMover",
		Owner:    uint32(playerID),
		Movement: 3,
	}

	sourceTile := awfdatautil.MapTileAt(g.Map, src)

	sourceTile.Unit = unit

	destinationTile := awfdatautil.MapTileAt(g.Map, dest)

	// Just to be safe, clear it out
	destinationTile.Unit = nil

	cmd := &awfdata.CmdMove{
		Source:      src,
		Destination: dest,
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
	src := &awfdata.Point{X: 0, Y: 0}
	dest := &awfdata.Point{X: 1, Y: 1}
	g, err := loaders.PrototypeGame()

	if err != nil {
		t.Fatal(err)
	}

	unit := &awfdata.Unit{
		Name:     "SampleMover",
		Owner:    uint32(playerID),
		Movement: 3,
	}

	sourceTile := awfdatautil.MapTileAt(g.Map, src)

	sourceTile.Unit = unit

	destinationTile := awfdatautil.MapTileAt(g.Map, dest)

	// Just to be safe, clear it out
	destinationTile.Unit = nil

	// Now try to do bad moves
	cmds := []*awfdata.CmdMove{
		{
			Source: &awfdata.Point{
				X: g.Map.Width,
				Y: src.Y,
			},
			Destination: dest,
		},
		{
			Source: &awfdata.Point{
				X: src.X,
				Y: g.Map.Height,
			},
			Destination: dest,
		},
		{
			Source: src,
			Destination: &awfdata.Point{
				X: g.Map.Width,
				Y: dest.Y,
			},
		},
		{
			Source: src,
			Destination: &awfdata.Point{
				X: dest.X,
				Y: g.Map.Height,
			},
		},
	}

	for _, cmd := range cmds {
		err = Move(cmd, playerID, g)

		if err == nil {
			t.Errorf("Expected error but didn't get one when moving from (%d, %d) to (%d, %d)",
				cmd.Source.X,
				cmd.Source.Y,
				cmd.Destination.X,
				cmd.Destination.Y)
		}
	}
}

func TestMoveErrorsFromWrongPlayer(t *testing.T) {
	playerID := 3
	src := &awfdata.Point{X: 0, Y: 0}
	dest := &awfdata.Point{X: 1, Y: 2}
	g, err := loaders.PrototypeGame()

	if err != nil {
		t.Fatal(err)
	}

	unit := &awfdata.Unit{
		Name:     "SampleMover",
		Owner:    uint32(playerID),
		Movement: 3,
	}

	sourceTile := awfdatautil.MapTileAt(g.Map, src)

	sourceTile.Unit = unit

	destinationTile := awfdatautil.MapTileAt(g.Map, dest)

	// Just to be safe, clear it out
	destinationTile.Unit = nil

	cmd := &awfdata.CmdMove{
		Source:      src,
		Destination: dest,
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
	src := &awfdata.Point{X: 0, Y: 0}
	dest := &awfdata.Point{X: 2, Y: 2}
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

	sourceTile := awfdatautil.MapTileAt(g.Map, src)

	sourceTile.Unit = unit

	destinationTile := awfdatautil.MapTileAt(g.Map, dest)

	// Just to be safe, clear it out
	destinationTile.Unit = nil

	cmd := &awfdata.CmdMove{
		Source:      src,
		Destination: dest,
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
	src := &awfdata.Point{X: 0, Y: 0}
	dest := &awfdata.Point{X: 1, Y: 1}
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

	sourceTile := awfdatautil.MapTileAt(g.Map, src)

	sourceTile.Unit = unit

	destinationTile := awfdatautil.MapTileAt(g.Map, dest)

	// Just to be safe, clear it out
	destinationTile.Unit = nil

	cmd := &awfdata.CmdMove{
		Source:      src,
		Destination: dest,
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
	cmd.Source = cmd.Destination
	cmd.Destination = &awfdata.Point{
		X: cmd.Source.X + 1,
		Y: cmd.Source.Y,
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
