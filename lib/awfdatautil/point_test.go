package awfdatautil

import (
	"testing"

	"github.com/Evertras/awf/lib/awfdata"
)

func TestManhattenDistance(t *testing.T) {
	tests := []struct {
		p1       *awfdata.Point
		p2       *awfdata.Point
		expected uint32
	}{
		{
			p1: &awfdata.Point{
				X: 0,
				Y: 0,
			},
			p2: &awfdata.Point{
				X: 0,
				Y: 0,
			},
			expected: 0,
		},
		{
			p1: &awfdata.Point{
				X: 0,
				Y: 0,
			},
			p2: &awfdata.Point{
				X: 1,
				Y: 1,
			},
			expected: 2,
		},
		{
			p1: &awfdata.Point{
				X: 3,
				Y: 1,
			},
			p2: &awfdata.Point{
				X: 1,
				Y: 0,
			},
			expected: 3,
		},
	}

	for _, test := range tests {
		actual := ManhattenDistance(test.p1, test.p2)

		if actual != test.expected {
			t.Errorf("Distance from (%d, %d) to (%d, %d) expected to be %d but got %d",
				test.p1.X,
				test.p1.Y,
				test.p2.X,
				test.p2.Y,
				test.expected,
				actual)
		}
	}
}
