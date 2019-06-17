package loaders

import (
	"github.com/Evertras/awf/lib/awfdata"
	"github.com/Evertras/awf/lib/awfdatautil"
)

// PrototypeMap returns a static, predefined prototype map for testing/dev purposes
func PrototypeMap() *awfdata.Map {
	// Intentionally different from each other to catch location errors elsewhere
	var width uint32 = 8
	var height uint32 = 10
	totalTiles := width * height

	m := &awfdata.Map{
		Width:  width,
		Height: height,
		Tiles:  make([]*awfdata.Map_Tile, totalTiles),
		Terrain: map[uint32]*awfdata.Terrain{
			1: {
				Name: "Prototype Open",
				Id:   1,
			},
			2: {
				Name:      "Prototype Objective",
				Id:        2,
				Objective: true,
			},
		},
	}

	for i := 0; i < int(totalTiles); i++ {
		m.Tiles[i] = &awfdata.Map_Tile{
			TerrainId: 1,
		}
	}

	objTiles := []*awfdata.Map_Tile{
		awfdatautil.MapTileAt(m, &awfdata.Point{X: 2, Y: 2}),
		awfdatautil.MapTileAt(m, &awfdata.Point{X: 4, Y: 5}),
		awfdatautil.MapTileAt(m, &awfdata.Point{X: 7, Y: 9}),
	}

	for _, tile := range objTiles {
		tile.TerrainId = 2
	}

	return m
}

// PrototypeFaction returns a simple prototype faction to play with
func PrototypeFaction() *awfdata.Faction {
	units := []*awfdata.Unit{
		{
			Name:      "Infantry",
			Movement:  2,
			Strength:  5,
			Vision:    2,
			Capturing: true,
		},

		{
			Name:           "Cavalry",
			Movement:       4,
			Strength:       3,
			AttackModifier: 4,
			Vision:         2,
			TerrainCosts: map[uint32]uint32{
				2: 2,
			},
		},
	}

	f := &awfdata.Faction{
		Name:  "Prototype",
		Units: units,
	}

	return f
}

// PrototypeGame returns a basic game beginning state for testing/dev purposes
func PrototypeGame() (*awfdata.Game, error) {
	m := PrototypeMap()

	g := &awfdata.Game{
		Map: m,
		Players: []*awfdata.Game_Player{
			{
				Faction: PrototypeFaction(),
			},
			{
				Faction: PrototypeFaction(),
			},
		},
	}

	topTile := awfdatautil.MapTileAt(m, &awfdata.Point{X: m.Width/2 + 1, Y: 1})
	bottomTile := awfdatautil.MapTileAt(m, &awfdata.Point{X: m.Width/2 + 1, Y: m.Height})

	var err error

	topTile.Unit, err = awfdatautil.SpawnUnit(g.Players[0].Faction.Units[0], 0)

	if err != nil {
		return nil, err
	}

	bottomTile.Unit, err = awfdatautil.SpawnUnit(g.Players[1].Faction.Units[0], 1)

	if err != nil {
		return nil, err
	}

	return g, nil
}
