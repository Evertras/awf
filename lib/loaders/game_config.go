package loaders

import (
	"io/ioutil"

	"github.com/Evertras/awf/lib/awfdata"
	"github.com/ghodss/yaml"
)

// LoadGameConfigYAML will read the contents of a given YAML config file that contains game configuration
func LoadGameConfigYAML(filename string) (*awfdata.GameConfig, error) {
	contents, err := ioutil.ReadFile(filename)

	if err != nil {
		return nil, err
	}

	return decodeGameConfigYAML(contents)
}

func decodeGameConfigYAML(data []byte) (*awfdata.GameConfig, error) {
	t := &awfdata.GameConfig{}

	if err := yaml.Unmarshal(data, t); err != nil {
		return nil, err
	}

	return t, nil
}
