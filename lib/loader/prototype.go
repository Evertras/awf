package loader

import (
	"github.com/Evertras/awf/lib/awfdata"
	"github.com/Evertras/awf/lib/awfdatautil"
)

// PrototypeMap returns a static, predefined prototype map for testing/dev purposes
func PrototypeMap() *awfdata.Map {
	// Intentionally different from each other to catch location errors elsewhere
	var width uint32 = 8
	var height uint32 = 10
	totalTiles := width * height

	m := &awfdata.Map{
		Width:  width,
		Height: height,
		Tiles:  make([]*awfdata.Map_Tile, totalTiles),
	}

	for i := 0; i < int(totalTiles); i++ {
		// Intentionally giving it a weird name to make sure we're not hardcoding anything elsewhere
		m.Tiles[i].Terrain = &awfdata.Terrain{
			Name: "PrototypeOpen",
		}
	}

	objTiles := []*awfdata.Map_Tile{
		awfdatautil.MapTileAt(m, 1, 1),
		awfdatautil.MapTileAt(m, 3, 4),
		awfdatautil.MapTileAt(m, 6, 8),
	}

	for _, tile := range objTiles {
		// Intentionally giving it a weird name to make sure we're not hardcoding anything elsewhere
		tile.Terrain.Name = "PrototypeObjective"
		tile.Terrain.Objective = true
	}

	return m
}
