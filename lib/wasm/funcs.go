//+build js

package wasm

import (
	"github.com/Evertras/awf/lib/loaders"

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
