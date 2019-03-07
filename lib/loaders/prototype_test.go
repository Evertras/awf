package loaders

import "testing"

func TestPrototypeMap(t *testing.T) {
	m := PrototypeMap()

	if len(m.Tiles) != int(m.Width*m.Height) {
		t.Errorf("Expected total tiles of %d but got %d", m.Width*m.Height, len(m.Tiles))
	}
}
