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
	}

	for i := 0; i < int(totalTiles); i++ {
		// Intentionally giving it a weird name to make sure we're not hardcoding anything elsewhere
		m.Tiles[i] = &awfdata.Map_Tile{
			Terrain: &awfdata.Terrain{
				Name: "PrototypeOpen",
			},
		}
	}

	objTiles := []*awfdata.Map_Tile{
		awfdatautil.MapTileAt(m, 1, 1),
		awfdatautil.MapTileAt(m, 3, 4),
		awfdatautil.MapTileAt(m, 6, 8),
	}

	for _, tile := range objTiles {
		// Intentionally giving it a weird name to make sure we're not hardcoding anything elsewhere
		tile.Terrain.Name = "PrototypeObjective"
		tile.Terrain.Objective = true
	}

	return m
}

// PrototypeFaction returns a simple prototype faction to play with
func PrototypeFaction() *awfdata.Faction {
	units := []*awfdata.Unit{
		&awfdata.Unit{
			Name:      "Infantry",
			Movement:  2,
			Strength:  5,
			Vision:    2,
			Capturing: true,
		},

		&awfdata.Unit{
			Name:           "Cavalry",
			Movement:       4,
			Strength:       3,
			AttackModifier: 4,
			Vision:         2,
			TerrainCosts: map[string]uint32{
				"PrototypeObjective": 2,
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
			&awfdata.Game_Player{
				Faction: PrototypeFaction(),
			},
			&awfdata.Game_Player{
				Faction: PrototypeFaction(),
			},
		},
	}

	topTile := awfdatautil.MapTileAt(m, int(m.Width/2), 0)
	bottomTile := awfdatautil.MapTileAt(m, int(m.Width/2), int(m.Height-1))

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
