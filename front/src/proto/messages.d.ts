import * as $protobuf from "protobufjs";
/** Namespace awfdata. */
export namespace awfdata {

    /** Properties of a CmdMove. */
    interface ICmdMove {

        /** CmdMove source */
        source?: (awfdata.IPoint|null);

        /** CmdMove destination */
        destination?: (awfdata.IPoint|null);
    }

    /** Represents a CmdMove. */
    class CmdMove implements ICmdMove {

        /**
         * Constructs a new CmdMove.
         * @param [properties] Properties to set
         */
        constructor(properties?: awfdata.ICmdMove);

        /** CmdMove source. */
        public source?: (awfdata.IPoint|null);

        /** CmdMove destination. */
        public destination?: (awfdata.IPoint|null);

        /**
         * Creates a new CmdMove instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CmdMove instance
         */
        public static create(properties?: awfdata.ICmdMove): awfdata.CmdMove;

        /**
         * Encodes the specified CmdMove message. Does not implicitly {@link awfdata.CmdMove.verify|verify} messages.
         * @param message CmdMove message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: awfdata.ICmdMove, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CmdMove message, length delimited. Does not implicitly {@link awfdata.CmdMove.verify|verify} messages.
         * @param message CmdMove message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: awfdata.ICmdMove, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CmdMove message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CmdMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): awfdata.CmdMove;

        /**
         * Decodes a CmdMove message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CmdMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): awfdata.CmdMove;

        /**
         * Verifies a CmdMove message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CmdMove message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CmdMove
         */
        public static fromObject(object: { [k: string]: any }): awfdata.CmdMove;

        /**
         * Creates a plain object from a CmdMove message. Also converts values to other types if specified.
         * @param message CmdMove
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: awfdata.CmdMove, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CmdMove to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Point. */
    interface IPoint {

        /** Point x */
        x?: (number|null);

        /** Point y */
        y?: (number|null);
    }

    /** Represents a Point. */
    class Point implements IPoint {

        /**
         * Constructs a new Point.
         * @param [properties] Properties to set
         */
        constructor(properties?: awfdata.IPoint);

        /** Point x. */
        public x: number;

        /** Point y. */
        public y: number;

        /**
         * Creates a new Point instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Point instance
         */
        public static create(properties?: awfdata.IPoint): awfdata.Point;

        /**
         * Encodes the specified Point message. Does not implicitly {@link awfdata.Point.verify|verify} messages.
         * @param message Point message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: awfdata.IPoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Point message, length delimited. Does not implicitly {@link awfdata.Point.verify|verify} messages.
         * @param message Point message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: awfdata.IPoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Point message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Point
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): awfdata.Point;

        /**
         * Decodes a Point message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Point
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): awfdata.Point;

        /**
         * Verifies a Point message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Point message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Point
         */
        public static fromObject(object: { [k: string]: any }): awfdata.Point;

        /**
         * Creates a plain object from a Point message. Also converts values to other types if specified.
         * @param message Point
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: awfdata.Point, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Point to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Faction. */
    interface IFaction {

        /** Faction name */
        name?: (string|null);

        /** Faction units */
        units?: (awfdata.IUnit[]|null);
    }

    /** Represents a Faction. */
    class Faction implements IFaction {

        /**
         * Constructs a new Faction.
         * @param [properties] Properties to set
         */
        constructor(properties?: awfdata.IFaction);

        /** Faction name. */
        public name: string;

        /** Faction units. */
        public units: awfdata.IUnit[];

        /**
         * Creates a new Faction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Faction instance
         */
        public static create(properties?: awfdata.IFaction): awfdata.Faction;

        /**
         * Encodes the specified Faction message. Does not implicitly {@link awfdata.Faction.verify|verify} messages.
         * @param message Faction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: awfdata.IFaction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Faction message, length delimited. Does not implicitly {@link awfdata.Faction.verify|verify} messages.
         * @param message Faction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: awfdata.IFaction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Faction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Faction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): awfdata.Faction;

        /**
         * Decodes a Faction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Faction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): awfdata.Faction;

        /**
         * Verifies a Faction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Faction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Faction
         */
        public static fromObject(object: { [k: string]: any }): awfdata.Faction;

        /**
         * Creates a plain object from a Faction message. Also converts values to other types if specified.
         * @param message Faction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: awfdata.Faction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Faction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Unit. */
    interface IUnit {

        /** Unit owner */
        owner?: (number|null);

        /** Unit name */
        name?: (string|null);

        /** Unit movement */
        movement?: (number|null);

        /** Unit strength */
        strength?: (number|null);

        /** Unit vision */
        vision?: (number|null);

        /** Unit terrainCosts */
        terrainCosts?: ({ [k: string]: number }|null);

        /** Unit capturing */
        capturing?: (boolean|null);

        /** Unit pacifist */
        pacifist?: (boolean|null);

        /** Unit flying */
        flying?: (boolean|null);

        /** Unit attackModifier */
        attackModifier?: (number|null);

        /** Unit ranged */
        ranged?: (awfdata.Unit.IRanged|null);

        /** Unit moved */
        moved?: (boolean|null);
    }

    /** Represents an Unit. */
    class Unit implements IUnit {

        /**
         * Constructs a new Unit.
         * @param [properties] Properties to set
         */
        constructor(properties?: awfdata.IUnit);

        /** Unit owner. */
        public owner: number;

        /** Unit name. */
        public name: string;

        /** Unit movement. */
        public movement: number;

        /** Unit strength. */
        public strength: number;

        /** Unit vision. */
        public vision: number;

        /** Unit terrainCosts. */
        public terrainCosts: { [k: string]: number };

        /** Unit capturing. */
        public capturing: boolean;

        /** Unit pacifist. */
        public pacifist: boolean;

        /** Unit flying. */
        public flying: boolean;

        /** Unit attackModifier. */
        public attackModifier: number;

        /** Unit ranged. */
        public ranged?: (awfdata.Unit.IRanged|null);

        /** Unit moved. */
        public moved: boolean;

        /**
         * Creates a new Unit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Unit instance
         */
        public static create(properties?: awfdata.IUnit): awfdata.Unit;

        /**
         * Encodes the specified Unit message. Does not implicitly {@link awfdata.Unit.verify|verify} messages.
         * @param message Unit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: awfdata.IUnit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Unit message, length delimited. Does not implicitly {@link awfdata.Unit.verify|verify} messages.
         * @param message Unit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: awfdata.IUnit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Unit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Unit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): awfdata.Unit;

        /**
         * Decodes an Unit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Unit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): awfdata.Unit;

        /**
         * Verifies an Unit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Unit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Unit
         */
        public static fromObject(object: { [k: string]: any }): awfdata.Unit;

        /**
         * Creates a plain object from an Unit message. Also converts values to other types if specified.
         * @param message Unit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: awfdata.Unit, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Unit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Unit {

        /** Properties of a Ranged. */
        interface IRanged {

            /** Ranged minimum */
            minimum?: (number|null);

            /** Ranged maximum */
            maximum?: (number|null);
        }

        /** Represents a Ranged. */
        class Ranged implements IRanged {

            /**
             * Constructs a new Ranged.
             * @param [properties] Properties to set
             */
            constructor(properties?: awfdata.Unit.IRanged);

            /** Ranged minimum. */
            public minimum: number;

            /** Ranged maximum. */
            public maximum: number;

            /**
             * Creates a new Ranged instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Ranged instance
             */
            public static create(properties?: awfdata.Unit.IRanged): awfdata.Unit.Ranged;

            /**
             * Encodes the specified Ranged message. Does not implicitly {@link awfdata.Unit.Ranged.verify|verify} messages.
             * @param message Ranged message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: awfdata.Unit.IRanged, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Ranged message, length delimited. Does not implicitly {@link awfdata.Unit.Ranged.verify|verify} messages.
             * @param message Ranged message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: awfdata.Unit.IRanged, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Ranged message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Ranged
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): awfdata.Unit.Ranged;

            /**
             * Decodes a Ranged message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Ranged
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): awfdata.Unit.Ranged;

            /**
             * Verifies a Ranged message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Ranged message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Ranged
             */
            public static fromObject(object: { [k: string]: any }): awfdata.Unit.Ranged;

            /**
             * Creates a plain object from a Ranged message. Also converts values to other types if specified.
             * @param message Ranged
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: awfdata.Unit.Ranged, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Ranged to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a Game. */
    interface IGame {

        /** Game map */
        map?: (awfdata.IMap|null);

        /** Game players */
        players?: (awfdata.Game.IPlayer[]|null);

        /** Game activePlayer */
        activePlayer?: (number|null);

        /** Game turn */
        turn?: (number|null);
    }

    /** Represents a Game. */
    class Game implements IGame {

        /**
         * Constructs a new Game.
         * @param [properties] Properties to set
         */
        constructor(properties?: awfdata.IGame);

        /** Game map. */
        public map?: (awfdata.IMap|null);

        /** Game players. */
        public players: awfdata.Game.IPlayer[];

        /** Game activePlayer. */
        public activePlayer: number;

        /** Game turn. */
        public turn: number;

        /**
         * Creates a new Game instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Game instance
         */
        public static create(properties?: awfdata.IGame): awfdata.Game;

        /**
         * Encodes the specified Game message. Does not implicitly {@link awfdata.Game.verify|verify} messages.
         * @param message Game message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: awfdata.IGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Game message, length delimited. Does not implicitly {@link awfdata.Game.verify|verify} messages.
         * @param message Game message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: awfdata.IGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Game message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Game
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): awfdata.Game;

        /**
         * Decodes a Game message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Game
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): awfdata.Game;

        /**
         * Verifies a Game message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Game message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Game
         */
        public static fromObject(object: { [k: string]: any }): awfdata.Game;

        /**
         * Creates a plain object from a Game message. Also converts values to other types if specified.
         * @param message Game
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: awfdata.Game, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Game to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Game {

        /** Properties of a Player. */
        interface IPlayer {

            /** Player faction */
            faction?: (awfdata.IFaction|null);
        }

        /** Represents a Player. */
        class Player implements IPlayer {

            /**
             * Constructs a new Player.
             * @param [properties] Properties to set
             */
            constructor(properties?: awfdata.Game.IPlayer);

            /** Player faction. */
            public faction?: (awfdata.IFaction|null);

            /**
             * Creates a new Player instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Player instance
             */
            public static create(properties?: awfdata.Game.IPlayer): awfdata.Game.Player;

            /**
             * Encodes the specified Player message. Does not implicitly {@link awfdata.Game.Player.verify|verify} messages.
             * @param message Player message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: awfdata.Game.IPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Player message, length delimited. Does not implicitly {@link awfdata.Game.Player.verify|verify} messages.
             * @param message Player message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: awfdata.Game.IPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Player message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Player
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): awfdata.Game.Player;

            /**
             * Decodes a Player message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Player
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): awfdata.Game.Player;

            /**
             * Verifies a Player message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Player message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Player
             */
            public static fromObject(object: { [k: string]: any }): awfdata.Game.Player;

            /**
             * Creates a plain object from a Player message. Also converts values to other types if specified.
             * @param message Player
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: awfdata.Game.Player, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Player to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a Map. */
    interface IMap {

        /** Map width */
        width?: (number|null);

        /** Map height */
        height?: (number|null);

        /** Map tiles */
        tiles?: (awfdata.Map.ITile[]|null);

        /** Map terrain */
        terrain?: ({ [k: string]: awfdata.ITerrain }|null);
    }

    /** Represents a Map. */
    class Map implements IMap {

        /**
         * Constructs a new Map.
         * @param [properties] Properties to set
         */
        constructor(properties?: awfdata.IMap);

        /** Map width. */
        public width: number;

        /** Map height. */
        public height: number;

        /** Map tiles. */
        public tiles: awfdata.Map.ITile[];

        /** Map terrain. */
        public terrain: { [k: string]: awfdata.ITerrain };

        /**
         * Creates a new Map instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Map instance
         */
        public static create(properties?: awfdata.IMap): awfdata.Map;

        /**
         * Encodes the specified Map message. Does not implicitly {@link awfdata.Map.verify|verify} messages.
         * @param message Map message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: awfdata.IMap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Map message, length delimited. Does not implicitly {@link awfdata.Map.verify|verify} messages.
         * @param message Map message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: awfdata.IMap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Map message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Map
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): awfdata.Map;

        /**
         * Decodes a Map message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Map
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): awfdata.Map;

        /**
         * Verifies a Map message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Map message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Map
         */
        public static fromObject(object: { [k: string]: any }): awfdata.Map;

        /**
         * Creates a plain object from a Map message. Also converts values to other types if specified.
         * @param message Map
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: awfdata.Map, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Map to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Map {

        /** Properties of a Tile. */
        interface ITile {

            /** Tile terrainId */
            terrainId?: (number|null);

            /** Tile unit */
            unit?: (awfdata.IUnit|null);
        }

        /** Represents a Tile. */
        class Tile implements ITile {

            /**
             * Constructs a new Tile.
             * @param [properties] Properties to set
             */
            constructor(properties?: awfdata.Map.ITile);

            /** Tile terrainId. */
            public terrainId: number;

            /** Tile unit. */
            public unit?: (awfdata.IUnit|null);

            /**
             * Creates a new Tile instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Tile instance
             */
            public static create(properties?: awfdata.Map.ITile): awfdata.Map.Tile;

            /**
             * Encodes the specified Tile message. Does not implicitly {@link awfdata.Map.Tile.verify|verify} messages.
             * @param message Tile message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: awfdata.Map.ITile, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Tile message, length delimited. Does not implicitly {@link awfdata.Map.Tile.verify|verify} messages.
             * @param message Tile message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: awfdata.Map.ITile, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Tile message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Tile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): awfdata.Map.Tile;

            /**
             * Decodes a Tile message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Tile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): awfdata.Map.Tile;

            /**
             * Verifies a Tile message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Tile message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Tile
             */
            public static fromObject(object: { [k: string]: any }): awfdata.Map.Tile;

            /**
             * Creates a plain object from a Tile message. Also converts values to other types if specified.
             * @param message Tile
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: awfdata.Map.Tile, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Tile to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a Terrain. */
    interface ITerrain {

        /** Terrain name */
        name?: (string|null);

        /** Terrain id */
        id?: (number|null);

        /** Terrain water */
        water?: (boolean|null);

        /** Terrain objective */
        objective?: (boolean|null);

        /** Terrain concealing */
        concealing?: (boolean|null);

        /** Terrain defenseModifier */
        defenseModifier?: (number|null);
    }

    /** Represents a Terrain. */
    class Terrain implements ITerrain {

        /**
         * Constructs a new Terrain.
         * @param [properties] Properties to set
         */
        constructor(properties?: awfdata.ITerrain);

        /** Terrain name. */
        public name: string;

        /** Terrain id. */
        public id: number;

        /** Terrain water. */
        public water: boolean;

        /** Terrain objective. */
        public objective: boolean;

        /** Terrain concealing. */
        public concealing: boolean;

        /** Terrain defenseModifier. */
        public defenseModifier: number;

        /**
         * Creates a new Terrain instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Terrain instance
         */
        public static create(properties?: awfdata.ITerrain): awfdata.Terrain;

        /**
         * Encodes the specified Terrain message. Does not implicitly {@link awfdata.Terrain.verify|verify} messages.
         * @param message Terrain message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: awfdata.ITerrain, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Terrain message, length delimited. Does not implicitly {@link awfdata.Terrain.verify|verify} messages.
         * @param message Terrain message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: awfdata.ITerrain, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Terrain message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Terrain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): awfdata.Terrain;

        /**
         * Decodes a Terrain message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Terrain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): awfdata.Terrain;

        /**
         * Verifies a Terrain message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Terrain message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Terrain
         */
        public static fromObject(object: { [k: string]: any }): awfdata.Terrain;

        /**
         * Creates a plain object from a Terrain message. Also converts values to other types if specified.
         * @param message Terrain
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: awfdata.Terrain, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Terrain to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameConfig. */
    interface IGameConfig {

        /** GameConfig terrain */
        terrain?: (awfdata.ITerrain[]|null);

        /** GameConfig factions */
        factions?: (awfdata.IFaction[]|null);
    }

    /** Represents a GameConfig. */
    class GameConfig implements IGameConfig {

        /**
         * Constructs a new GameConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: awfdata.IGameConfig);

        /** GameConfig terrain. */
        public terrain: awfdata.ITerrain[];

        /** GameConfig factions. */
        public factions: awfdata.IFaction[];

        /**
         * Creates a new GameConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameConfig instance
         */
        public static create(properties?: awfdata.IGameConfig): awfdata.GameConfig;

        /**
         * Encodes the specified GameConfig message. Does not implicitly {@link awfdata.GameConfig.verify|verify} messages.
         * @param message GameConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: awfdata.IGameConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameConfig message, length delimited. Does not implicitly {@link awfdata.GameConfig.verify|verify} messages.
         * @param message GameConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: awfdata.IGameConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): awfdata.GameConfig;

        /**
         * Decodes a GameConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): awfdata.GameConfig;

        /**
         * Verifies a GameConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameConfig
         */
        public static fromObject(object: { [k: string]: any }): awfdata.GameConfig;

        /**
         * Creates a plain object from a GameConfig message. Also converts values to other types if specified.
         * @param message GameConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: awfdata.GameConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Placeholder. */
    interface IPlaceholder {

        /** Placeholder sampleField */
        sampleField?: (number|null);
    }

    /** Represents a Placeholder. */
    class Placeholder implements IPlaceholder {

        /**
         * Constructs a new Placeholder.
         * @param [properties] Properties to set
         */
        constructor(properties?: awfdata.IPlaceholder);

        /** Placeholder sampleField. */
        public sampleField: number;

        /**
         * Creates a new Placeholder instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Placeholder instance
         */
        public static create(properties?: awfdata.IPlaceholder): awfdata.Placeholder;

        /**
         * Encodes the specified Placeholder message. Does not implicitly {@link awfdata.Placeholder.verify|verify} messages.
         * @param message Placeholder message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: awfdata.IPlaceholder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Placeholder message, length delimited. Does not implicitly {@link awfdata.Placeholder.verify|verify} messages.
         * @param message Placeholder message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: awfdata.IPlaceholder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Placeholder message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Placeholder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): awfdata.Placeholder;

        /**
         * Decodes a Placeholder message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Placeholder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): awfdata.Placeholder;

        /**
         * Verifies a Placeholder message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Placeholder message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Placeholder
         */
        public static fromObject(object: { [k: string]: any }): awfdata.Placeholder;

        /**
         * Creates a plain object from a Placeholder message. Also converts values to other types if specified.
         * @param message Placeholder
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: awfdata.Placeholder, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Placeholder to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
