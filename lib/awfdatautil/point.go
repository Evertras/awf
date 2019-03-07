package awfdatautil

import "github.com/Evertras/awf/lib/awfdata"

// ManhattenDistance returns "Manhatten Distance" between the points
// which is the sum of the distances between each respective X and Y
func ManhattenDistance(p1 *awfdata.Point, p2 *awfdata.Point) uint32 {
	var dX, dY uint32

	if p1.X > p2.X {
		dX = p1.X - p2.X
	} else {
		dX = p2.X - p1.X
	}

	if p1.Y > p2.Y {
		dY = p1.Y - p2.Y
	} else {
		dY = p2.Y - p1.Y
	}

	return dX + dY
}
