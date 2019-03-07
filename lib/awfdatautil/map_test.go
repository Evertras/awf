package awfdatautil

import (
	"fmt"
	"testing"

	"github.com/Evertras/awf/lib/awfdata"
)

func TestMapTileAt(t *testing.T) {
	width := 5
	height := 10
	totalTiles := width * height

	m := &awfdata.Map{
		Width:  uint32(width),
		Height: uint32(height),
		Tiles:  make([]*awfdata.Map_Tile, totalTiles),
	}

	for i := 0; i < totalTiles; i++ {
		m.Tiles[i] = &awfdata.Map_Tile{
			Terrain: &awfdata.Terrain{
				Name:            fmt.Sprintf("Test%d%d", i%width, i/width),
				DefenseModifier: int32(i),
			},
		}
	}

	for x := 0; x < width; x++ {
		for y := 0; y < height; y++ {
			expectedName := fmt.Sprintf("Test%d%d", x, y)
			tile := MapTileAt(m, &awfdata.Point{
				X: uint32(x),
				Y: uint32(y),
			})

			if tile.Terrain.Name != expectedName {
				t.Errorf("Expected name %q but got %q", expectedName, tile.Terrain.Name)
			}
		}
	}
}
