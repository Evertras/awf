//+build js

package main

import (
	"syscall/js"

	"github.com/Evertras/awf/lib/wasm"
)

func main() {
	c := make(chan bool, 0)

	js.Global().Set("gowasm", map[string]interface{}{})
	base := js.Global().Get("gowasm")

	wasm.RegisterCallbacks(base)
	wasm.RegisterWasmCallbacks(base)

	println("WASM initialized")

	<-c
}
