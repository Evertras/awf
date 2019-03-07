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

func TestPotentialMovement(t *testing.T) {
	width := 20
	height := 20
	totalTiles := width * height

	m := &awfdata.Map{
		Width:  uint32(width),
		Height: uint32(height),
		Tiles:  make([]*awfdata.Map_Tile, totalTiles),
	}

	for i := 0; i < totalTiles; i++ {
		m.Tiles[i] = &awfdata.Map_Tile{
			Terrain: &awfdata.Terrain{
				Name: "Open",
			},
		}
	}

	center := &awfdata.Point{X: uint32(width / 2), Y: uint32(width / 2)}

	origin := MapTileAt(m, center)
	expectedLens := []int{
		0,
		4,
		12,
		24,
		40,
	}

	for movement := 0; movement < 5; movement++ {
		origin.Unit = &awfdata.Unit{
			Name:     "SampleMover",
			Movement: uint32(movement),
		}

		moves := PotentialMoves(m, center)

		if len(moves) != expectedLens[movement] {
			t.Errorf("For movement %d expected %d moves, but got %d", movement, expectedLens[movement], len(moves))
		}

		for i, move := range moves {
			if move.X == center.X && move.Y == center.Y {
				t.Error("Should not get a potential move where unit already is")
			}

			dist := ManhattenDistance(move, center)

			if dist > uint32(movement) {
				t.Error("Exceeded movement")
			}

			for j, other := range moves {
				if i == j {
					continue
				}

				if move.X == other.X && move.Y == other.Y {
					t.Error("Should not have duplicate moves")
				}
			}
		}
	}
}
