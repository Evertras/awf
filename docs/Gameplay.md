# Gameplay

A place to jot down rough design.  May be out of date.

All code should be as generic as possible.  Explicit code for individual tag behaviors is fine, but things
like unit types should be completely built out of tags and configuration.

## Terrain

Terrain is defined as follows:

* Name
* Tags

A Tag consists of a Name and optionally some Metadata.

| Tag         | Description |
|-------------|-------------|
| Water       | Impassable by standard units. |
| Objective X | Is considered an objective that can be captured.  X is the current controlling player, or null if none. |
| Concealing  | Units must be adjacent to see inside. |
| Defense Bonus X | A flat modifier for defending against attacks while in this terrain. |

The Movement Cost may be overridden for a specific Unit, but provides a sane default.

Note that Blocks Vision only applies to that terrain's square, and only to units that are not adjacent.
All units can see into adjacent terrain regardless of whether they Block Vision or not.

### Terrain Types

Tentative list of initial types are as follows:

| Name | Description |
|------|-------------|
| Open | Default terrain with nothing special about it. |
| Objective | An objective. |
| Forest | Blocks vision, minor defensive bonus and movement cost. |
| Water | Impassable by standard units. |

## Units

A Unit is defined by the following data:

* Name
* Type
* Movement Total
* Movement Cost Per Terrain Type (if different from provided default)
* Tags
* Base Combat Strength
* Vision Range

### Unit Types

A Unit Type is defined by a name and its relationships versus other unit types.

The initial Unit Type list is as follows:

* Scout
* Infantry
* Cavalry
* Monster
* Support

Scouts are generally fast, ignore terrain penalties, and have good vision.  They are good against Infantry but poor against
everything else.

Infantry is the only unit type that can capture objectives.  They are poor against Cavalry but good against Monsters.

Cavalry is faster moving and hard hitting, but more affected by terrain.  They are good against Infantry but poor against Monsters.

Monsters are slow, but very powerful.  Good against Cavalry but poor against Infantry.

Support units may or may not be able to fight, but offer other benefits such as a healing aura.

### Unit Tags

A tag is defined by the following data:

* Name
* Optional metadata, depending on tag

The following tags may be present in any combination:

| Tag Name        | Description |
|-----------------|-------------|
| Pacifist        | Doesn't attack.  Can still be attacked as normal. |
| Flying          | Ignores all terrain movement costs. |
| Piercing Vision | Can see through all terrain. |
| Ranged X-Y      | Attacks at a minimum range of X and a maximum range of Y, inclusive.  Units with the Ranged tag will not attack back when being attacked even if their minimum range is 1.  Units that are attacked by a Ranged Unit will not attack back, even if they are adjacent. |
| Heal Aura X     | At the start of each turn, heal all adjacent units for X. |
| Attack Bonus X  | Get +X strength when initiating an attack (cavalry will probably have this often). |

## Combat

Combat consists of one unit first attacking another, then being attacked in return if the unit survives.
Units that are damaged deal significantly less damage, giving an innate advantage to the attacker even
if the attacked unit isn't destroyed.

Formulae TBD
