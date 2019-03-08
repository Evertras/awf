# Advanced Warfare: Fantasy Battles

[![Build Status](https://travis-ci.org/Evertras/awf.svg?branch=master)](https://travis-ci.org/Evertras/awf)

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
* Have the option to reasonably write a native front end (Ebiten?) in a similar fashion as web without much fuss
* No duplicate logic in back end and front end
* Use protobufs as data schemas for all code; not sure if this is a good idea, but want to try it to find out

## Initial Non-Goals

* No persistance or logins, everything is ephemeral in memory directly on the server

## Milestones

### 0.1.0 - Boilerplate

* [x] Server serves static content
* [x] WASM built that simply says "Hello World" to console when run
* [x] Index.html is mostly placeholder that loads WASM
* [x] Typescript compiled from main.ts entrypoint
* [x] Travis CI working and passing
* [x] A dummy test is passing in Typescript and Go lands

To verify, should see "Hello World" in console when loading page via server.

### 0.2.0 - Data definitions

* [x] Units defined in code
* [x] Terrain defined in code
* [x] Can load unit/terrain types via YAML
* [x] Map data defined in code
* [x] Sample prototype map can be loaded on demand
* [x] Game in progress defined in code with units belonging to different players on map

### 0.3.0 - Foundational logic

* [x] Functionality to determine potential movement for a unit on a map
* [x] General framework for commands and state changes
* [x] Ability to move a unit in code via command

### ???

??? - Probably need some other stuff TBD

### 0.X.0 - Front End Basic

* [ ] A level is loaded and visible with distinguishable terrain
* [ ] A few units are loaded and visible on some tiles
* [ ] The player can click the unit and see potential destinations, then click again to move the unit there
* [ ] The player can hit 'end turn' to start a new turn (no opponents yet)