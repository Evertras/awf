package awfdatautil

import "github.com/Evertras/awf/lib/awfdata"

// MapTileAt returns the map tile located at x, y; no bounds checking, be careful!
func MapTileAt(m *awfdata.Map, p *awfdata.Point) *awfdata.Map_Tile {
	return m.Tiles[p.Y*m.Width+p.X]
}

func PotentialMoves(m *awfdata.Map, p *awfdata.Point) []*awfdata.Point {
	tile := MapTileAt(m, p)

	if tile.Unit == nil {
		return nil
	}

	return nil
}
