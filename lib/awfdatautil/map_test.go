package awfdatautil

import (
	"fmt"
	"testing"

	"github.com/Evertras/awf/lib/awfdata"
)

func TestMapTileAt(t *testing.T) {
	m := generateSampleOpenMap()

	for i := uint32(0); i < sampleTotalTiles; i++ {
		m.Tiles[i].Terrain.Name = fmt.Sprintf("Test%d%d", i%sampleWidth, i/sampleWidth)
	}

	for x := uint32(0); x < sampleWidth; x++ {
		for y := uint32(0); y < sampleHeight; y++ {
			expectedName := fmt.Sprintf("Test%d%d", x, y)
			tile := MapTileAt(m, &awfdata.Point{
				X: x,
				Y: y,
			})

			if tile.Terrain.Name != expectedName {
				t.Errorf("Expected name %q but got %q", expectedName, tile.Terrain.Name)
			}
		}
	}
}

func TestPotentialMovementOpenMap(t *testing.T) {
	m := generateSampleOpenMap()

	center := &awfdata.Point{X: uint32(sampleWidth / 2), Y: uint32(sampleHeight / 2)}

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

func TestPotentialMovementTerrainCosts(t *testing.T) {
	m := generateSampleOpenMap()

	// Should be able to move 2 squares total
	movement := 8
	cost := 3

	center := &awfdata.Point{X: uint32(sampleWidth / 2), Y: uint32(sampleHeight / 2)}

	origin := MapTileAt(m, center)

	terrainCosts := make(map[string]uint32)

	terrainCosts[m.Tiles[0].Terrain.Name] = 3

	origin.Unit = &awfdata.Unit{
		Name:         "SampleMover",
		Movement:     8,
		TerrainCosts: terrainCosts,
	}

	moves := PotentialMoves(m, center)

	for _, move := range moves {
		dist := ManhattenDistance(move, center)

		if dist > uint32(movement/cost) {
			t.Fatal("Exceeded expected movement")
		}
	}
}

func BenchmarkPotentialMoves(b *testing.B) {
	m := generateSampleOpenMap()

	center := &awfdata.Point{X: sampleWidth / 2, Y: sampleHeight / 2}

	origin := MapTileAt(m, center)

	origin.Unit = &awfdata.Unit{
		Name:     "SampleMover",
		Movement: 0,
	}

	for movement := uint32(0); movement <= 8; movement++ {
		b.Run(fmt.Sprintf("Movement %d", movement), func(b *testing.B) {
			origin.Unit.Movement = movement
			for i := 0; i < b.N; i++ {
				PotentialMoves(m, center)
			}
		})
	}
}
