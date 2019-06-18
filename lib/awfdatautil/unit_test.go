package awfdatautil

import "testing"

func TestGenerateUnitIDGeneratesUniquely(t *testing.T) {
	// This is WAY more than we'll ever need... hopefully...
	expectedCount := 10000
	generated := make(map[uint32]bool)

	for i := 0; i < expectedCount; i++ {
		generated[GenerateUnitID()] = true
	}

	if len(generated) != expectedCount {
		t.Errorf("Expected %d unique IDs but got %d", expectedCount, len(generated))
	}
}
