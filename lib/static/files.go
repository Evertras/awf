package static

import (
	"bytes"
	"compress/gzip"
	"io/ioutil"
)

// FileData contains information to serve a file via HTTP
type FileData struct {
	Mime     string
	GzipData []byte
}

// Files contains all known files long with their mime types
var Files = make(map[string]FileData)

func readRaw(filename string) []byte {
	raw, err := ioutil.ReadFile("front/" + filename)

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

	Files[filename] = FileData{
		Mime:     mime,
		GzipData: raw,
	}
}

// Load loads and compresses all the files we care about to make them accessible through Files
func Load() {
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
}
