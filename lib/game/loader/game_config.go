package loader

import (
	"io/ioutil"

	awfmsg "github.com/Evertras/awf/messages/gomessage"
	"github.com/ghodss/yaml"
)

// LoadGameConfigYAML will read the contents of a given YAML config file that contains game configuration
func LoadGameConfigYAML(filename string) (*awfmsg.GameConfig, error) {
	contents, err := ioutil.ReadFile(filename)

	if err != nil {
		return nil, err
	}

	return decodeYAML(contents)
}

func decodeYAML(data []byte) (*awfmsg.GameConfig, error) {
	t := &awfmsg.GameConfig{}

	if err := yaml.Unmarshal(data, t); err != nil {
		return nil, err
	}

	return t, nil
}
