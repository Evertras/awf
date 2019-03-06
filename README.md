# Advanced Warfare: Fantasy Battles

Planned to be a simple Advance Wars clone-ish with asymmetric fantasy style units
and an objective capture point system to determine a winner instead of total defeat
in order to promote interesting tactical decisions without a long slog near the end.

## Gameplay Goals

See [Gameplay doc](docs/Gameplay.md) for more details.

* Selectable factions with asymmetric strengths in unit types
* Play on a predefined level against either a dead simple AI or another player (network)
* Fog of war necessitates scouting and encourages sneakiness
* Turn-based gameplay, units can move and/or attack once per turn
* Begin with one unit, spawn more each turn along your starting border
* Capture an objective by moving onto it with certain kinds of units
* Gain points for each controlled objective every turn
* Playable on web via HTML5
* A full game should be completed in about 10-20 minutes (narrow later based on what's actually fun)

## Technical Goals

* Write the core gameplay in Go, focused on the server
* Create a facade interface for a front end to reach in via WASM to know where things are
* No duplicate logic in back end and front end

## Initial Non-Goals

* No persistance or logins, everything is ephemeral in memory directly on the server
