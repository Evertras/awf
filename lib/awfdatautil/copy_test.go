package awfdatautil

import (
	"testing"

	"github.com/Evertras/awf/lib/awfdata"
)

func BenchmarkCopyUnit(b *testing.B) {
	u := &awfdata.Unit{
		AttackModifier: 1,
		Name:           "Some long name",
		TerrainCosts: map[uint32]uint32{
			1: 17,
			2: 381,
			3: 10,
		},
	}

	for i := 0; i < b.N; i++ {
		_, err := CopyUnit(u)

		if err != nil {
			b.Fatal(err)
		}
	}
}

func TestCopyUnitCopiesMovementCosts(t *testing.T) {
	terrainID := uint32(3)
	terrainCost := uint32(17)

	u := &awfdata.Unit{
		AttackModifier: 1,
		Name:           "Something",
		TerrainCosts: map[uint32]uint32{
			terrainID: terrainCost,
		},
	}

	copied, err := CopyUnit(u)

	if err != nil {
		t.Fatal(err)
	}

	if len(copied.TerrainCosts) != len(u.TerrainCosts) {
		t.Fatalf("Expected %d terrain cost modifiers, but got %d", len(u.TerrainCosts), len(copied.TerrainCosts))
	}

	if val, ok := copied.TerrainCosts[terrainID]; !ok || val != terrainCost {
		t.Errorf("Expected terrain ID %d to have cost of %d, but got %d", terrainID, terrainCost, val)
	}
}
