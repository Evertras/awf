package awfdatautil

import (
	"github.com/Evertras/awf/lib/awfdata"
)

// MapTileAt returns the map tile located at x, y; no bounds checking, be careful!
func MapTileAt(m *awfdata.Map, p *awfdata.Point) *awfdata.Map_Tile {
	return m.Tiles[p.Y*m.Width+p.X]
}

// PotentialMoves returns all potential destination squares for the unit
func PotentialMoves(m *awfdata.Map, p *awfdata.Point) []*awfdata.Point {
	source := MapTileAt(m, p)

	if source.Unit == nil {
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

	// Start at the unit's position, then branch out from there... likely some major gains here, could
	// be worth optimizing if used enough (AI in particular).  See benchmarks in map_test.go
	var explore func(p *awfdata.Point, move uint32, last *awfdata.Point)
	explore = func(p *awfdata.Point, move uint32, last *awfdata.Point) {
		var cost uint32
		var ok bool
		h := hash(p)

		tile := MapTileAt(m, p)
		unit := tile.Unit

		// Special case: if this is the first square, ignore it
		if p == last {
			cost = 0
		} else if cost, ok = source.Unit.TerrainCosts[tile.Terrain.Name]; !ok {
			cost = 1
		}

		if cost > move {
			return
		} else {
			move -= cost
		}

		// Can't end a move on an occupied tile
		if unit == nil {
			potentials[h] = true
		} else if unit.Owner != source.Unit.Owner {
			// Can't pass through other players' units, only our own
			return
		}

		if p.Y > 0 && last.Y >= p.Y {
			explore(&awfdata.Point{X: p.X, Y: p.Y - 1}, move, p)
		}

		if p.Y < m.Height && last.Y <= p.Y {
			explore(&awfdata.Point{X: p.X, Y: p.Y + 1}, move, p)
		}

		if p.X > 0 && last.X >= p.X {
			explore(&awfdata.Point{X: p.X - 1, Y: p.Y}, move, p)
		}

		if p.X < m.Width && last.X <= p.X {
			explore(&awfdata.Point{X: p.X + 1, Y: p.Y}, move, p)
		}
	}

	explore(p, source.Unit.Movement, p)

	results := make([]*awfdata.Point, len(potentials))[:0]

	for k := range potentials {
		res := unhash(k)

		results = append(results, res)
	}

	return results
}
