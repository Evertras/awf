package loaders

import "testing"

const sampleGameConfig string = `
terrain:
  - name: Sample
  - name: Another
    water: true
    defense_modifier: 3
`

// Quickly sanity check to make sure our YAML decoder works as expected with generated proto
// messages (which don't have yaml labels), don't need to check everything...
func TestGameConfigYAMLSanityCheck(t *testing.T) {
	decoded, err := decodeGameConfigYAML([]byte(sampleGameConfig))

	if err != nil {
		t.Fatal(err)
	}

	if len(decoded.Terrain) != 2 {
		t.Fatalf("Expected length of 2 but got %d", len(decoded.Terrain))
	}

	if decoded.Terrain[0].Name != "Sample" {
		t.Errorf("Expected first name to be Sample but got %q", decoded.Terrain[0].Name)
	}

	if decoded.Terrain[1].Name != "Another" {
		t.Errorf("Expected second name to be Another but got %q", decoded.Terrain[1].Name)
	}

	if decoded.Terrain[0].Water {
		t.Error("Expected not to see a Water tag on first element, but did")
	}

	if !decoded.Terrain[1].Water {
		t.Error("Expected to see a water tag on the second element, but didn't")
	}

	if decoded.Terrain[0].DefenseModifier != 0 {
		t.Errorf("Expected defense modifier of 0, but got %d", decoded.Terrain[0].DefenseModifier)
	}

	if decoded.Terrain[1].DefenseModifier != 3 {
		t.Errorf("Expected defense modifier of 3, but got %d", decoded.Terrain[1].DefenseModifier)
	}
}
