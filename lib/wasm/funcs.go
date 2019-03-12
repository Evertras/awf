//+build js

package wasm

import "syscall/js"

var base js.Value

// RegisterCallbacks registers all functions with the gowasm global object on the front end
func RegisterCallbacks() {
	js.Global().Set("gowasm", map[string]interface{}{})
	base = js.Global().Get("gowasm")
	base.Set("sayHello", js.NewCallback(sayHello))
	base.Set("ready", true)
}

func sayHello(args []js.Value) {
	println("hello from go wasm module")
}
