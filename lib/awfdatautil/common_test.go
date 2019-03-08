package awfdatautil

import "github.com/Evertras/awf/lib/awfdata"

const (
	sampleWidth      uint32 = 20
	sampleHeight     uint32 = 30
	sampleTotalTiles uint32 = sampleWidth * sampleHeight
)

func generateSampleOpenMap() *awfdata.Map {
	m := &awfdata.Map{
		Width:  uint32(sampleWidth),
		Height: uint32(sampleHeight),
		Tiles:  make([]*awfdata.Map_Tile, sampleTotalTiles),
	}

	for i := uint32(0); i < sampleTotalTiles; i++ {
		m.Tiles[i] = &awfdata.Map_Tile{
			Terrain: &awfdata.Terrain{
				Name: "Open",
			},
		}
	}

	return m
}
