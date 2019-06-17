package awfdatautil

import "github.com/Evertras/awf/lib/awfdata"

// PointInside returns true if the given point is inside the map
func PointInside(p *awfdata.Point, m *awfdata.Map) bool {
	return p.X >= 1 && p.X <= m.Width && p.Y >= 1 && p.Y <= m.Height
}
