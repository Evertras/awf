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

	hash := func(p *awfdata.Point) uint64 {
		return uint64(p.X) + uint64(p.Y)<<32
	}

	unhash := func(h uint64) *awfdata.Point {
		return &awfdata.Point{
			X: uint32(h & 0xFFFF),
			Y: uint32(h >> 32),
		}
	}

	potentials := make(map[uint64]bool)

	// Start at the unit's position, then branch out from there
	var explore func(p *awfdata.Point, move uint32)
	explore = func(p *awfdata.Point, move uint32) {
		h := hash(p)

		potentials[h] = true

		if move == 0 {
			return
		}

		move--

		if p.Y > 0 {
			explore(&awfdata.Point{X: p.X, Y: p.Y - 1}, move)
		}

		if p.Y < m.Height {
			explore(&awfdata.Point{X: p.X, Y: p.Y + 1}, move)
		}

		if p.X > 0 {
			explore(&awfdata.Point{X: p.X - 1, Y: p.Y}, move)
		}

		if p.X < m.Width {
			explore(&awfdata.Point{X: p.X + 1, Y: p.Y}, move)
		}
	}

	explore(p, tile.Unit.Movement)

	results := make([]*awfdata.Point, len(potentials)-1)[:0]

	for k := range potentials {
		res := unhash(k)

		if !(res.X == p.X && res.Y == p.Y) {
			results = append(results, unhash(k))
		}
	}

	return results
}
