package awfdatautil

import (
	"fmt"
	"testing"

	"github.com/Evertras/awf/lib/awfdata"
)

func TestMapTileAt(t *testing.T) {
	m := generateSampleOpenMap()

	for i := uint32(0); i < sampleTotalTiles; i++ {
		m.Tiles[i].TerrainId = i%sampleWidth*1000 + i/sampleWidth
	}

	for x := uint32(0); x < sampleWidth; x++ {
		for y := uint32(0); y < sampleHeight; y++ {
			expectedID := x*1000 + y
			tile := MapTileAt(m, &awfdata.Point{
				X: x + 1,
				Y: y + 1,
			})

			if tile.TerrainId != expectedID {
				t.Errorf("Expected id %d but got %d", expectedID, tile.TerrainId)
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

		moves, err := PotentialMoves(m, center)

		if err != nil {
			t.Errorf("Unexpected error getting potential moves: %v", err)
		}

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

func TestUnitCantMoveTwice(t *testing.T) {
	m := generateSampleOpenMap()

	center := &awfdata.Point{X: uint32(sampleWidth / 2), Y: uint32(sampleHeight / 2)}

	origin := MapTileAt(m, center)

	origin.Unit = &awfdata.Unit{
		Name:     "SampleMover",
		Movement: uint32(2),
		Moved:    true,
	}

	_, err := PotentialMoves(m, center)

	if err == nil {
		t.Errorf("Expected an error for a unit that already moved, but got none")
	}
}

func TestPotentialMovementTerrainCosts(t *testing.T) {
	m := generateSampleOpenMap()

	// Should be able to move 2 squares total
	movement := 8
	cost := 3

	center := &awfdata.Point{X: uint32(sampleWidth/2) + 1, Y: uint32(sampleHeight/2) + 1}

	origin := MapTileAt(m, center)

	terrainCosts := make(map[uint32]uint32)

	terrainCosts[m.Tiles[0].TerrainId] = 3

	origin.Unit = &awfdata.Unit{
		Name:         "SampleMover",
		Movement:     8,
		TerrainCosts: terrainCosts,
	}

	moves, err := PotentialMoves(m, center)

	if err != nil {
		t.Fatal(err)
	}

	for _, move := range moves {
		dist := ManhattenDistance(move, center)

		if dist > uint32(movement/cost) {
			t.Fatal("Exceeded expected movement")
		}
	}
}

func BenchmarkPotentialMoves(b *testing.B) {
	m := generateSampleOpenMap()

	center := &awfdata.Point{X: sampleWidth/2 + 1, Y: sampleHeight/2 + 1}

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
