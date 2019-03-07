package awfdatautil

import (
	"encoding/json"

	"github.com/Evertras/awf/lib/awfdata"
)

// CopyUnit creates a new copy of the given unit, useful for spawning from a template
func CopyUnit(u *awfdata.Unit) (*awfdata.Unit, error) {
	// Doing all this explicitly may be faster, but the maintenance cost isn't worth it
	// since this shouldn't be on a hot path anywhere.
	data, err := json.Marshal(u)

	if err != nil {
		return nil, err
	}

	out := &awfdata.Unit{}

	err = json.Unmarshal(data, out)

	return out, err
}

// SpawnUnit creates a copy of the template unit and assigns an owner
func SpawnUnit(template *awfdata.Unit, owner int) (*awfdata.Unit, error) {
	copied, err := CopyUnit(template)

	if err != nil {
		return nil, err
	}

	copied.Owner = uint32(owner)

	return copied, nil
}
