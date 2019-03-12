//+build js

package wasm

import (
	"github.com/Evertras/awf/lib/awfdata"
	"github.com/Evertras/awf/lib/awfdatautil"
	"github.com/Evertras/awf/lib/loaders"
	"github.com/golang/protobuf/proto"

	"syscall/js"
)

var base js.Value
var inst instance

// RegisterCallbacks registers all functions with the gowasm global object on the front end
func RegisterCallbacks() {
	js.Global().Set("gowasm", map[string]interface{}{})
	base = js.Global().Get("gowasm")

	base.Set("sayHello", js.NewCallback(sayHello))
	base.Set("initPrototype", js.NewCallback(initPrototype))
	base.Set("getPotentialMoves", js.NewCallback(getPotentialMoves))
	base.Set("getGameState", js.NewCallback(getGameState))

	base.Set("ready", true)
}

func sayHello(args []js.Value) {
	println("hello from go wasm module")
}

func initPrototype(args []js.Value) {
	cb := args[0]
	g, err := loaders.PrototypeGame()

	if err != nil {
		cb.Invoke(err.Error())
		return
	}

	inst = instance{
		game: g,
	}

	cb.Invoke()
}

func getPotentialMoves(args []js.Value) {
	x := args[1].Int()
	y := args[2].Int()

	if x < 0 || x >= int(inst.game.Map.Width) || y < 0 || y >= int(inst.game.Map.Height) {
		args[0].Invoke("Out of map bounds")
		return
	}

	potentialMoves := awfdatautil.PotentialMoves(inst.game.Map, &awfdata.Point{X: uint32(x), Y: uint32(y)})

	ret := make([]interface{}, len(potentialMoves))

	for i, move := range potentialMoves {
		obj := make(map[string]interface{})

		obj["x"] = move.X
		obj["y"] = move.Y

		ret[i] = obj
	}

	args[0].Invoke(js.Undefined(), ret)
}

func getGameState(args []js.Value) {
	data, err := proto.Marshal(inst.game)

	if err != nil {
		args[0].Invoke(err.Error())
	}

	arr := js.TypedArrayOf([]uint8(data))
	defer arr.Release()

	args[0].Invoke(js.Undefined(), arr)
}
