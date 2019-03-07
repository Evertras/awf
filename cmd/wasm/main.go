//+build js

package main

import (
	"syscall/js"

	"github.com/Evertras/awf/lib/loader"
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

	g, err := loader.PrototypeGame()

	if err != nil {
		println(err)
	} else {
		println(len(g.Players))
	}

	println("Hello WASM World")

	<-c
}
