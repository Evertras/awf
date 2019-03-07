package awfdatautil

import (
	"testing"

	"github.com/Evertras/awf/lib/awfdata"
)

func BenchmarkCopyUnit(b *testing.B) {
	u := &awfdata.Unit{
		AttackModifier: 1,
		Name:           "Some long name",
		TerrainCosts: map[string]uint32{
			"Forest": 17,
			"Tundra": 381,
			"Lava":   0,
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
	u := &awfdata.Unit{
		AttackModifier: 1,
		Name:           "Something",
		TerrainCosts: map[string]uint32{
			"Forest": 17,
		},
	}

	copied, err := CopyUnit(u)

	if err != nil {
		t.Fatal(err)
	}

	if len(copied.TerrainCosts) != len(u.TerrainCosts) {
		t.Fatalf("Expected %d terrain cost modifiers, but got %d", len(u.TerrainCosts), len(copied.TerrainCosts))
	}

	if val, ok := copied.TerrainCosts["Forest"]; !ok || val != 17 {
		t.Errorf("Expected Forest to have cost of 17, but got %d", val)
	}
}
