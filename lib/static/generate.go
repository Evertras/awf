//+build ignore

package main

import (
	"bytes"
	"compress/gzip"
	"io/ioutil"
	"os"
	"strings"
	"text/template"
	"time"
)

func main() {
	index, err := ioutil.ReadFile("../../front/index.html")

	if err != nil {
		panic(err)
	}

	wasmExec, err := ioutil.ReadFile("../../front/wasm_exec.js")

	if err != nil {
		panic(err)
	}

	gameJs, err := ioutil.ReadFile("../../front/game.js")

	if err != nil {
		panic(err)
	}

	style, err := ioutil.ReadFile("../../front/style.css")

	if err != nil {
		panic(err)
	}

	favicon, err := ioutil.ReadFile("../../front/favicon.ico")

	if err != nil {
		panic(err)
	}

	wasm, err := ioutil.ReadFile("../../front/lib.wasm")

	if err != nil {
		panic(err)
	}

	var b bytes.Buffer

	w := gzip.NewWriter(&b)

	_, err = w.Write(wasm)
	w.Close()

	if err != nil {
		panic(err)
	}

	f, err := os.Create("build.go")
	defer f.Close()

	if err != nil {
		panic(err)
	}

	err = packageTemplate.Execute(
		f,
		struct {
			Timestamp    time.Time
			Index        string
			WasmExec     string
			GameJs       string
			Style        string
			FaviconBytes []byte
			WasmBytes    []byte
		}{
			Timestamp:    time.Now(),
			Index:        sanitize(string(index)),
			WasmExec:     sanitize(string(wasmExec)),
			GameJs:       sanitize(string(gameJs)),
			Style:        sanitize(string(style)),
			FaviconBytes: favicon,
			WasmBytes:    b.Bytes(),
		})

	if err != nil {
		os.Remove("build.go")
		panic(err)
	}
}

func sanitize(str string) string {
	return strings.Replace(str, "`", "` + \"`\" + `", -1)
}

var packageTemplate = template.Must(template.New("").Parse(`// Code generated by go generate; DO NOT EDIT.
package static

// StaticHtmlIndex is the raw contents of index.html
var StaticHtmlIndex = ` + "`{{ .Index }}`" + `

// StaticJsWasmExec is the raw contents of wasm_exec.js
var StaticJsWasmExec = ` + "`{{ .WasmExec }}`" + `

// StaticJsGame is the raw contents of game.js
var StaticJsGame = ` + "`{{ .GameJs }}`" + `

// StaticCssStyle is the raw contents of style.css
var StaticCssStyle = ` + "`{{ .Style }}`" + `

// StaticFavicon is the favicon's raw binary contents
var StaticFavicon = []byte{
	// {{ len .FaviconBytes }} bytes
	{{ range .FaviconBytes }} {{ . | printf "%#x," }} {{ end }}
}

// StaticLibWasm is the raw binary contents of lib.wasm
var StaticLibWasm = []byte{
	// {{ len .WasmBytes }} bytes
	{{ range .WasmBytes }} {{ . | printf "%#x," }} {{ end }}
}`))
