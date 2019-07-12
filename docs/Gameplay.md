# GDD

Game design!  May split this up later.

Tech note: All code should be as generic as possible.  Explicit code for individual tag behaviors is fine, but things
like unit types should be completely built out of tags and configuration.

Some rules may modify other rules.  For example, a unit with the Ranged tag can attack units that are not adjacent to
it.  When a rule modifies another rule, the more specific rule always wins.

## Definitions

### General Terms

For clarity, here's what some specific words mean in this document.

| Word         | Description |
|--------------|-------------|
| adjacent     | One space immediately up, down, left, or right to another space.  Diagonals do not count. |

### Terrain

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

#### Terrain Types

Tentative list of initial types are as follows:

| Name | Description |
|------|-------------|
| Open | Default terrain with nothing special about it. |
| Objective | An objective. |
| Forest | Blocks vision, minor defensive bonus and movement cost. |
| Water | Impassable by standard units. |

### Units

A Unit is defined by the following data:

* Name
* Movement Total
* Movement Cost Per Terrain Type (if different from provided default)
* Tags
* Base Combat Strength
* Vision Range

#### Unit Attributes

A tag is defined by the following data:

* Name
* Optional metadata, depending on tag

The following tags may be present in any combination:

| Tag Name        | Description |
|-----------------|-------------|
| Capturing       | This unit can capture objectives. |
| Pacifist        | Doesn't attack.  Can still be attacked as normal. |
| Flying          | Ignores all terrain movement costs. |
| Piercing Vision | Can see through all terrain. |
| Ranged X-Y      | Attacks at a minimum range of X and a maximum range of Y, inclusive.  Units with the Ranged tag will not attack back when being attacked even if their minimum range is 1.  Units that are attacked by a Ranged Unit will not attack back, even if they are adjacent. |
| Heal Aura X     | At the start of each turn, heal all adjacent units for X. |
| Attack Bonus X  | Get +X strength when initiating an attack (cavalry will probably have this often). |
| First Strike    | Always attack first, even when being attacked.  Two opposing units that both have First Strike cancel each other out and act as if neither had it. |

### Faction

A Faction is defined simply as:

* Name
* List of units to spawn

This will expand later.

## Gameplay

### Unit Activation

A unit can be activated once per turn.  An 'activation' means the following:

* The unit can optionally move
* The unit can optionally perform one action

If both happen, they must happen in this order.  A unit cannot perform an action and then move.

If a unit does not perform an action, it is considered to `wait` and does nothing.

#### Unit Movement

A unit can move once per turn.  With no modifiers of any kind, moving a single adjacent square costs
one point of movement.  If a unit's movement cost for a terrain type exists, it will use that cost instead
to enter that square.  Leaving a square does not have any cost, only entering.

A unit moves all at once.  Any remaining movement points are lost for the turn after movement.

A unit will visually always take the shortest possible path to its destination.  The route should never matter for
gameplay purposes.  Movement is treated as if the unit has teleported to its destination.

Friendly units are not considered for the cost of movement.  They can be moved through freely.  A unit cannot
end its movement on top of another friendly unit, it can only move through them.

Hostile units are considered impassable terrain but do not otherwise hinder movement nearby.

#### Unit Actions

##### Attack

The unit attacks a hostile unit adjacent to it, initiating Combat as described below.  The unit taking
the action is considered the Attacking Unit, and the unit being attacked is considered the Defending Unit.

### Combat

Combat consists of one unit first attacking another, then being attacked in return if the unit survives.
Units that are damaged deal significantly less damage, giving an innate advantage to the attacker even
if the attacked unit isn't destroyed.

Formulae TBD
