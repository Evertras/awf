package awfdatautil

import (
	"sync/atomic"
)

// Just do a simple incrementing counter... make sure it's thread safe!
// We don't actually care what number it starts at as long as it's non-zero
// to avoid getting eaten by protobuf
var unitIdCounter uint32 = 1

// GenerateUnitID generates a unique ID for a unit.  Pattern is not guaranteed,
// only uniqueness, so treat as an arbitrary value.
func GenerateUnitID() uint32 {
	return atomic.AddUint32(&unitIdCounter, 1)
}
