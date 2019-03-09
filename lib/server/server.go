package server

import (
	"context"
	"log"
	"net/http"

	"github.com/Evertras/awf/lib/static"
)

// Config contains all configuration to run the server
type Config struct {
	// ReadStaticFilesPerRequest determines if the server will read from disk on each request
	// or use the precompiled static files.  Useful for development, should not
	// be on otherwise.
	ReadStaticFilesPerRequest bool
}

// Server is an HTTP server that will serve static content and handle web socket connections
type Server struct {
	ctx context.Context
	cfg Config
}

// New creates a new server that's ready to listen but hasn't started yet
func New(ctx context.Context, cfg Config) *Server {
	return &Server{
		ctx: ctx,
		cfg: cfg,
	}
}

// Listen will start listening and block until the server closes
func (s *Server) Listen(addr string) error {
	mux := http.NewServeMux()

	if s.cfg.ReadStaticFilesPerRequest {
		mux.Handle("/", http.FileServer(http.Dir("front")))
		log.Println("Reading files from disk for every request, ONLY USE THIS FOR DEV MODE!")
	} else {
		mux.HandleFunc("/assets/*", func(w http.ResponseWriter, req *http.Request) {
			w.WriteHeader(404)
		})
		mux.HandleFunc("/", func(w http.ResponseWriter, req *http.Request) {
			file := req.RequestURI[1:]

			if file == "" {
				file = "index.html"
			}

			if data, ok := static.StaticGzipFileData[file]; ok {
				w.Header().Set("Content-Type", data.Mime)
				w.Header().Set("Content-Encoding", "gzip")
				w.Write(data.Data)
			} else {
				w.WriteHeader(404)
			}
		})
	}

	//mux.HandleFunc("/join", join(s))

	httpServer := http.Server{
		Addr:    addr,
		Handler: mux,
	}

	return httpServer.ListenAndServe()
}
