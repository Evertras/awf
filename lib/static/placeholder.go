package static

//go:generate go run generate.go

// FileData contains information to serve a file via HTTP
type FileData struct {
	Mime string
	Data []byte
}
