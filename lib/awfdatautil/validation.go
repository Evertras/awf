package awfdatautil

import "github.com/Evertras/awf/lib/awfdata"

// PointInside returns true if the given point is inside the map
func PointInside(p *awfdata.Point, m *awfdata.Map) bool {
	return p.X >= 0 && p.X < m.Width && p.Y >= 0 && p.Y < m.Height
}
