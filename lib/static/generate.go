//+build ignore

package main

import (
	"bytes"
	"compress/gzip"
	"fmt"
	"io/ioutil"
	"os"
	"strings"
	"text/template"

	"github.com/Evertras/awf/lib/static"
)

var fileData map[string]static.FileData = make(map[string]static.FileData)

func readRaw(filename string) []byte {
	raw, err := ioutil.ReadFile("../../front/" + filename)

	if err != nil {
		panic(err)
	}

	return raw
}

func readGzip(filename string) []byte {
	raw := readRaw(filename)

	var b bytes.Buffer

	w := gzip.NewWriter(&b)

	_, err := w.Write(raw)
	w.Close()

	if err != nil {
		panic(err)
	}

	return b.Bytes()
}

func register(filename, mime string) {
	raw := readGzip(filename)

	fileData[filename] = static.FileData{
		Mime: mime,
		Data: raw,
	}
}

func main() {
	os.Remove("build.go")

	defer func() {
		if r := recover(); r != nil {
			fmt.Println("Generate failed, deleting bad file", r)
			os.Remove("lib/build.go")
		}
	}()

	// Included JS
	register("lib/wasm_exec.js", "application/javascript")
	register("lib/pixi.min.js", "application/javascript")
	register("lib/pixi.min.js.map", "application/octet-stream")
	register("game.js", "application/javascript")
	register("game.js.map", "application/octet-stream")

	// HTML
	register("index.html", "text/html")
	register("style.css", "text/css")
	register("favicon.ico", "image/x-icon")

	// WASM
	register("lib.wasm", "application/wasm")

	// Assets
	register("assets/terrain.png", "image/png")
	register("assets/terrain.json", "application/json")
	register("assets/ui.png", "image/png")
	register("assets/ui.json", "application/json")

	f, err := os.Create("build.go")

	if err != nil {
		panic(err)
	}

	defer f.Close()

	err = packageTemplate.Execute(
		f,
		struct {
			FileData map[string]static.FileData
		}{
			FileData: fileData,
		})

	if err != nil {
		panic(err)
	}
}

func sanitize(str string) string {
	return strings.Replace(str, "`", "` + \"`\" + `", -1)
}

var packageTemplate = template.Must(template.New("").Parse(`package static

//////////////////////////////////////////////
// Code generated by go generate; DO NOT EDIT.

// StaticGzipFileData maps a filename request to gzipped raw data to return
var StaticGzipFileData = map[string]FileData{
	{{ range $key, $value := .FileData }}
	// {{ len $value.Data }} bytes
	"{{ $key }}": FileData{
		Mime: "{{ $value.Mime }}",
		Data: []byte{ {{ range $value.Data }}{{ . | printf "%#x, " }}{{ end }} },
	},
	{{ end }}
}`))
