package commands

import (
	"errors"

	"github.com/Evertras/awf/lib/awfdata"
	"github.com/Evertras/awf/lib/awfdatautil"
)

// Move moves a unit to the requested destination, if the move is valid.
// Returns an error if the move is invalid for any reason.
func Move(cmd *awfdata.CmdMove, playerIndex int, g *awfdata.Game) error {
	// Because this is a user command, we need to be careful about inputs
	if !awfdatautil.PointInside(cmd.Source, g.Map) {
		return errors.New("source point outside map")
	}
	if !awfdatautil.PointInside(cmd.Destination, g.Map) {
		return errors.New("destination point outside map")
	}

	srcTile := awfdatautil.MapTileAt(g.Map, cmd.Source)

	if srcTile.Unit == nil {
		return errors.New("no unit found")
	}

	unit := srcTile.Unit

	if unit.Owner != uint32(playerIndex) {
		return errors.New("unit belongs to another player")
	}

	if unit.Moved {
		return errors.New("unit already moved")
	}

	destTile := awfdatautil.MapTileAt(g.Map, cmd.Destination)

	if destTile.Unit != nil {
		return errors.New("destination occupied")
	}

	distance := awfdatautil.ManhattenDistance(cmd.Source, cmd.Destination)

	if unit.Movement < distance {
		return errors.New("not enough movement")
	}

	// TODO: terrain

	destTile.Unit = unit
	srcTile.Unit = nil

	unit.Moved = true

	return nil
}
