//+build js

package main

import (
	"syscall/js"

	"github.com/Evertras/awf/lib/awfdatautil"

	"github.com/Evertras/awf/lib/awfdata"
	"github.com/Evertras/awf/lib/loaders"
)

func sayHello(args []js.Value) {
	println("hello from go wasm")
}

func registerCallbacks(base js.Value) {
	base.Set("sayHello", js.NewCallback(sayHello))
	base.Set("ready", true)
}

func main() {
	c := make(chan bool, 0)

	js.Global().Set("gowasm", map[string]interface{}{})
	base := js.Global().Get("gowasm")

	registerCallbacks(base)

	g, err := loaders.PrototypeGame()

	g.Map.Tiles[0].Unit = &awfdata.Unit{
		Name:     "SampleMover",
		Movement: 3,
	}

	potentials := awfdatautil.PotentialMoves(g.Map, &awfdata.Point{X: 0, Y: 0})

	println("Unit at (0,0) can move to:")
	for _, p := range potentials {
		println("(", p.X, ", ", p.Y, ")")
	}

	if err != nil {
		println(err)
	} else {
		println("Player count:", len(g.Players))
	}

	println("Hello WASM World")

	<-c
}
