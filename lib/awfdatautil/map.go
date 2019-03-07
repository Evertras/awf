package awfdatautil

import "github.com/Evertras/awf/lib/awfdata"

// MapTileAt returns the map tile located at x, y; no bounds checking, be careful!
func MapTileAt(m *awfdata.Map, x, y int) *awfdata.Map_Tile {
	return m.Tiles[y*int(m.Width)+x]
}
