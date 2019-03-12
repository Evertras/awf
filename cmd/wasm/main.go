//+build js

package main

import (
	"github.com/Evertras/awf/lib/wasm"
)

func main() {
	c := make(chan bool, 0)

	wasm.RegisterCallbacks()

	println("WASM initialized")

	<-c
}
