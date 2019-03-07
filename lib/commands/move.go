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
	if !awfdatautil.PointInside(cmd.Origin, g.Map) {
		return errors.New("origin point outside map")
	}
	if !awfdatautil.PointInside(cmd.Destination, g.Map) {
		return errors.New("destination point outside map")
	}

	srcTile := awfdatautil.MapTileAt(g.Map, int(cmd.Origin.X), int(cmd.Origin.Y))

	if srcTile.Unit == nil {
		return errors.New("no unit found")
	}

	unit := srcTile.Unit

	if unit.Owner != uint32(playerIndex) {
		return errors.New("tried to move another player's unit")
	}

	destTile := awfdatautil.MapTileAt(g.Map, int(cmd.Destination.X), int(cmd.Destination.Y))

	if destTile.Unit != nil {
		return errors.New("destination occupied")
	}

	requiredMovement := awfdatautil.ManhattenDistance(cmd.Origin, cmd.Destination)

	if unit.Movement < requiredMovement {
		return errors.New("not enough movement")
	}

	// TODO: terrain

	destTile.Unit = srcTile.Unit
	srcTile.Unit = nil

	return nil
}
