/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.awfdata = (function() {

    /**
     * Namespace awfdata.
     * @exports awfdata
     * @namespace
     */
    var awfdata = {};

    awfdata.CmdMove = (function() {

        /**
         * Properties of a CmdMove.
         * @memberof awfdata
         * @interface ICmdMove
         * @property {awfdata.IPoint|null} [source] CmdMove source
         * @property {awfdata.IPoint|null} [destination] CmdMove destination
         */

        /**
         * Constructs a new CmdMove.
         * @memberof awfdata
         * @classdesc Represents a CmdMove.
         * @implements ICmdMove
         * @constructor
         * @param {awfdata.ICmdMove=} [properties] Properties to set
         */
        function CmdMove(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CmdMove source.
         * @member {awfdata.IPoint|null|undefined} source
         * @memberof awfdata.CmdMove
         * @instance
         */
        CmdMove.prototype.source = null;

        /**
         * CmdMove destination.
         * @member {awfdata.IPoint|null|undefined} destination
         * @memberof awfdata.CmdMove
         * @instance
         */
        CmdMove.prototype.destination = null;

        /**
         * Creates a new CmdMove instance using the specified properties.
         * @function create
         * @memberof awfdata.CmdMove
         * @static
         * @param {awfdata.ICmdMove=} [properties] Properties to set
         * @returns {awfdata.CmdMove} CmdMove instance
         */
        CmdMove.create = function create(properties) {
            return new CmdMove(properties);
        };

        /**
         * Encodes the specified CmdMove message. Does not implicitly {@link awfdata.CmdMove.verify|verify} messages.
         * @function encode
         * @memberof awfdata.CmdMove
         * @static
         * @param {awfdata.ICmdMove} message CmdMove message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CmdMove.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.source != null && message.hasOwnProperty("source"))
                $root.awfdata.Point.encode(message.source, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.destination != null && message.hasOwnProperty("destination"))
                $root.awfdata.Point.encode(message.destination, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CmdMove message, length delimited. Does not implicitly {@link awfdata.CmdMove.verify|verify} messages.
         * @function encodeDelimited
         * @memberof awfdata.CmdMove
         * @static
         * @param {awfdata.ICmdMove} message CmdMove message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CmdMove.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CmdMove message from the specified reader or buffer.
         * @function decode
         * @memberof awfdata.CmdMove
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {awfdata.CmdMove} CmdMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CmdMove.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.awfdata.CmdMove();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.source = $root.awfdata.Point.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.destination = $root.awfdata.Point.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CmdMove message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof awfdata.CmdMove
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {awfdata.CmdMove} CmdMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CmdMove.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CmdMove message.
         * @function verify
         * @memberof awfdata.CmdMove
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CmdMove.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.source != null && message.hasOwnProperty("source")) {
                var error = $root.awfdata.Point.verify(message.source);
                if (error)
                    return "source." + error;
            }
            if (message.destination != null && message.hasOwnProperty("destination")) {
                var error = $root.awfdata.Point.verify(message.destination);
                if (error)
                    return "destination." + error;
            }
            return null;
        };

        /**
         * Creates a CmdMove message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof awfdata.CmdMove
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {awfdata.CmdMove} CmdMove
         */
        CmdMove.fromObject = function fromObject(object) {
            if (object instanceof $root.awfdata.CmdMove)
                return object;
            var message = new $root.awfdata.CmdMove();
            if (object.source != null) {
                if (typeof object.source !== "object")
                    throw TypeError(".awfdata.CmdMove.source: object expected");
                message.source = $root.awfdata.Point.fromObject(object.source);
            }
            if (object.destination != null) {
                if (typeof object.destination !== "object")
                    throw TypeError(".awfdata.CmdMove.destination: object expected");
                message.destination = $root.awfdata.Point.fromObject(object.destination);
            }
            return message;
        };

        /**
         * Creates a plain object from a CmdMove message. Also converts values to other types if specified.
         * @function toObject
         * @memberof awfdata.CmdMove
         * @static
         * @param {awfdata.CmdMove} message CmdMove
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CmdMove.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.source = null;
                object.destination = null;
            }
            if (message.source != null && message.hasOwnProperty("source"))
                object.source = $root.awfdata.Point.toObject(message.source, options);
            if (message.destination != null && message.hasOwnProperty("destination"))
                object.destination = $root.awfdata.Point.toObject(message.destination, options);
            return object;
        };

        /**
         * Converts this CmdMove to JSON.
         * @function toJSON
         * @memberof awfdata.CmdMove
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CmdMove.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CmdMove;
    })();

    awfdata.Point = (function() {

        /**
         * Properties of a Point.
         * @memberof awfdata
         * @interface IPoint
         * @property {number|null} [x] Point x
         * @property {number|null} [y] Point y
         */

        /**
         * Constructs a new Point.
         * @memberof awfdata
         * @classdesc Represents a Point.
         * @implements IPoint
         * @constructor
         * @param {awfdata.IPoint=} [properties] Properties to set
         */
        function Point(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Point x.
         * @member {number} x
         * @memberof awfdata.Point
         * @instance
         */
        Point.prototype.x = 0;

        /**
         * Point y.
         * @member {number} y
         * @memberof awfdata.Point
         * @instance
         */
        Point.prototype.y = 0;

        /**
         * Creates a new Point instance using the specified properties.
         * @function create
         * @memberof awfdata.Point
         * @static
         * @param {awfdata.IPoint=} [properties] Properties to set
         * @returns {awfdata.Point} Point instance
         */
        Point.create = function create(properties) {
            return new Point(properties);
        };

        /**
         * Encodes the specified Point message. Does not implicitly {@link awfdata.Point.verify|verify} messages.
         * @function encode
         * @memberof awfdata.Point
         * @static
         * @param {awfdata.IPoint} message Point message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Point.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && message.hasOwnProperty("x"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.x);
            if (message.y != null && message.hasOwnProperty("y"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.y);
            return writer;
        };

        /**
         * Encodes the specified Point message, length delimited. Does not implicitly {@link awfdata.Point.verify|verify} messages.
         * @function encodeDelimited
         * @memberof awfdata.Point
         * @static
         * @param {awfdata.IPoint} message Point message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Point.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Point message from the specified reader or buffer.
         * @function decode
         * @memberof awfdata.Point
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {awfdata.Point} Point
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Point.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.awfdata.Point();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.x = reader.uint32();
                    break;
                case 2:
                    message.y = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Point message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof awfdata.Point
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {awfdata.Point} Point
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Point.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Point message.
         * @function verify
         * @memberof awfdata.Point
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Point.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            return null;
        };

        /**
         * Creates a Point message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof awfdata.Point
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {awfdata.Point} Point
         */
        Point.fromObject = function fromObject(object) {
            if (object instanceof $root.awfdata.Point)
                return object;
            var message = new $root.awfdata.Point();
            if (object.x != null)
                message.x = object.x >>> 0;
            if (object.y != null)
                message.y = object.y >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Point message. Also converts values to other types if specified.
         * @function toObject
         * @memberof awfdata.Point
         * @static
         * @param {awfdata.Point} message Point
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Point.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            return object;
        };

        /**
         * Converts this Point to JSON.
         * @function toJSON
         * @memberof awfdata.Point
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Point.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Point;
    })();

    awfdata.Faction = (function() {

        /**
         * Properties of a Faction.
         * @memberof awfdata
         * @interface IFaction
         * @property {string|null} [name] Faction name
         * @property {Array.<awfdata.IUnit>|null} [units] Faction units
         */

        /**
         * Constructs a new Faction.
         * @memberof awfdata
         * @classdesc Represents a Faction.
         * @implements IFaction
         * @constructor
         * @param {awfdata.IFaction=} [properties] Properties to set
         */
        function Faction(properties) {
            this.units = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Faction name.
         * @member {string} name
         * @memberof awfdata.Faction
         * @instance
         */
        Faction.prototype.name = "";

        /**
         * Faction units.
         * @member {Array.<awfdata.IUnit>} units
         * @memberof awfdata.Faction
         * @instance
         */
        Faction.prototype.units = $util.emptyArray;

        /**
         * Creates a new Faction instance using the specified properties.
         * @function create
         * @memberof awfdata.Faction
         * @static
         * @param {awfdata.IFaction=} [properties] Properties to set
         * @returns {awfdata.Faction} Faction instance
         */
        Faction.create = function create(properties) {
            return new Faction(properties);
        };

        /**
         * Encodes the specified Faction message. Does not implicitly {@link awfdata.Faction.verify|verify} messages.
         * @function encode
         * @memberof awfdata.Faction
         * @static
         * @param {awfdata.IFaction} message Faction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Faction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.units != null && message.units.length)
                for (var i = 0; i < message.units.length; ++i)
                    $root.awfdata.Unit.encode(message.units[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Faction message, length delimited. Does not implicitly {@link awfdata.Faction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof awfdata.Faction
         * @static
         * @param {awfdata.IFaction} message Faction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Faction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Faction message from the specified reader or buffer.
         * @function decode
         * @memberof awfdata.Faction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {awfdata.Faction} Faction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Faction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.awfdata.Faction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    if (!(message.units && message.units.length))
                        message.units = [];
                    message.units.push($root.awfdata.Unit.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Faction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof awfdata.Faction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {awfdata.Faction} Faction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Faction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Faction message.
         * @function verify
         * @memberof awfdata.Faction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Faction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.units != null && message.hasOwnProperty("units")) {
                if (!Array.isArray(message.units))
                    return "units: array expected";
                for (var i = 0; i < message.units.length; ++i) {
                    var error = $root.awfdata.Unit.verify(message.units[i]);
                    if (error)
                        return "units." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Faction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof awfdata.Faction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {awfdata.Faction} Faction
         */
        Faction.fromObject = function fromObject(object) {
            if (object instanceof $root.awfdata.Faction)
                return object;
            var message = new $root.awfdata.Faction();
            if (object.name != null)
                message.name = String(object.name);
            if (object.units) {
                if (!Array.isArray(object.units))
                    throw TypeError(".awfdata.Faction.units: array expected");
                message.units = [];
                for (var i = 0; i < object.units.length; ++i) {
                    if (typeof object.units[i] !== "object")
                        throw TypeError(".awfdata.Faction.units: object expected");
                    message.units[i] = $root.awfdata.Unit.fromObject(object.units[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Faction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof awfdata.Faction
         * @static
         * @param {awfdata.Faction} message Faction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Faction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.units = [];
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.units && message.units.length) {
                object.units = [];
                for (var j = 0; j < message.units.length; ++j)
                    object.units[j] = $root.awfdata.Unit.toObject(message.units[j], options);
            }
            return object;
        };

        /**
         * Converts this Faction to JSON.
         * @function toJSON
         * @memberof awfdata.Faction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Faction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Faction;
    })();

    awfdata.Unit = (function() {

        /**
         * Properties of an Unit.
         * @memberof awfdata
         * @interface IUnit
         * @property {number|null} [owner] Unit owner
         * @property {string|null} [name] Unit name
         * @property {number|null} [movement] Unit movement
         * @property {number|null} [strength] Unit strength
         * @property {number|null} [vision] Unit vision
         * @property {Object.<string,number>|null} [terrainCosts] Unit terrainCosts
         * @property {boolean|null} [capturing] Unit capturing
         * @property {boolean|null} [pacifist] Unit pacifist
         * @property {boolean|null} [flying] Unit flying
         * @property {number|null} [attackModifier] Unit attackModifier
         * @property {awfdata.Unit.IRanged|null} [ranged] Unit ranged
         * @property {boolean|null} [moved] Unit moved
         */

        /**
         * Constructs a new Unit.
         * @memberof awfdata
         * @classdesc Represents an Unit.
         * @implements IUnit
         * @constructor
         * @param {awfdata.IUnit=} [properties] Properties to set
         */
        function Unit(properties) {
            this.terrainCosts = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Unit owner.
         * @member {number} owner
         * @memberof awfdata.Unit
         * @instance
         */
        Unit.prototype.owner = 0;

        /**
         * Unit name.
         * @member {string} name
         * @memberof awfdata.Unit
         * @instance
         */
        Unit.prototype.name = "";

        /**
         * Unit movement.
         * @member {number} movement
         * @memberof awfdata.Unit
         * @instance
         */
        Unit.prototype.movement = 0;

        /**
         * Unit strength.
         * @member {number} strength
         * @memberof awfdata.Unit
         * @instance
         */
        Unit.prototype.strength = 0;

        /**
         * Unit vision.
         * @member {number} vision
         * @memberof awfdata.Unit
         * @instance
         */
        Unit.prototype.vision = 0;

        /**
         * Unit terrainCosts.
         * @member {Object.<string,number>} terrainCosts
         * @memberof awfdata.Unit
         * @instance
         */
        Unit.prototype.terrainCosts = $util.emptyObject;

        /**
         * Unit capturing.
         * @member {boolean} capturing
         * @memberof awfdata.Unit
         * @instance
         */
        Unit.prototype.capturing = false;

        /**
         * Unit pacifist.
         * @member {boolean} pacifist
         * @memberof awfdata.Unit
         * @instance
         */
        Unit.prototype.pacifist = false;

        /**
         * Unit flying.
         * @member {boolean} flying
         * @memberof awfdata.Unit
         * @instance
         */
        Unit.prototype.flying = false;

        /**
         * Unit attackModifier.
         * @member {number} attackModifier
         * @memberof awfdata.Unit
         * @instance
         */
        Unit.prototype.attackModifier = 0;

        /**
         * Unit ranged.
         * @member {awfdata.Unit.IRanged|null|undefined} ranged
         * @memberof awfdata.Unit
         * @instance
         */
        Unit.prototype.ranged = null;

        /**
         * Unit moved.
         * @member {boolean} moved
         * @memberof awfdata.Unit
         * @instance
         */
        Unit.prototype.moved = false;

        /**
         * Creates a new Unit instance using the specified properties.
         * @function create
         * @memberof awfdata.Unit
         * @static
         * @param {awfdata.IUnit=} [properties] Properties to set
         * @returns {awfdata.Unit} Unit instance
         */
        Unit.create = function create(properties) {
            return new Unit(properties);
        };

        /**
         * Encodes the specified Unit message. Does not implicitly {@link awfdata.Unit.verify|verify} messages.
         * @function encode
         * @memberof awfdata.Unit
         * @static
         * @param {awfdata.IUnit} message Unit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Unit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.movement != null && message.hasOwnProperty("movement"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.movement);
            if (message.strength != null && message.hasOwnProperty("strength"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.strength);
            if (message.vision != null && message.hasOwnProperty("vision"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.vision);
            if (message.capturing != null && message.hasOwnProperty("capturing"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.capturing);
            if (message.pacifist != null && message.hasOwnProperty("pacifist"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.pacifist);
            if (message.flying != null && message.hasOwnProperty("flying"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.flying);
            if (message.attackModifier != null && message.hasOwnProperty("attackModifier"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.attackModifier);
            if (message.ranged != null && message.hasOwnProperty("ranged"))
                $root.awfdata.Unit.Ranged.encode(message.ranged, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.terrainCosts != null && message.hasOwnProperty("terrainCosts"))
                for (var keys = Object.keys(message.terrainCosts), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 10, wireType 2 =*/82).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]).uint32(/* id 2, wireType 0 =*/16).uint32(message.terrainCosts[keys[i]]).ldelim();
            if (message.owner != null && message.hasOwnProperty("owner"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.owner);
            if (message.moved != null && message.hasOwnProperty("moved"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.moved);
            return writer;
        };

        /**
         * Encodes the specified Unit message, length delimited. Does not implicitly {@link awfdata.Unit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof awfdata.Unit
         * @static
         * @param {awfdata.IUnit} message Unit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Unit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Unit message from the specified reader or buffer.
         * @function decode
         * @memberof awfdata.Unit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {awfdata.Unit} Unit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Unit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.awfdata.Unit(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 11:
                    message.owner = reader.uint32();
                    break;
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.movement = reader.uint32();
                    break;
                case 3:
                    message.strength = reader.uint32();
                    break;
                case 4:
                    message.vision = reader.uint32();
                    break;
                case 10:
                    reader.skip().pos++;
                    if (message.terrainCosts === $util.emptyObject)
                        message.terrainCosts = {};
                    key = reader.uint32();
                    reader.pos++;
                    message.terrainCosts[key] = reader.uint32();
                    break;
                case 5:
                    message.capturing = reader.bool();
                    break;
                case 6:
                    message.pacifist = reader.bool();
                    break;
                case 7:
                    message.flying = reader.bool();
                    break;
                case 8:
                    message.attackModifier = reader.int32();
                    break;
                case 9:
                    message.ranged = $root.awfdata.Unit.Ranged.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.moved = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Unit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof awfdata.Unit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {awfdata.Unit} Unit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Unit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Unit message.
         * @function verify
         * @memberof awfdata.Unit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Unit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.owner != null && message.hasOwnProperty("owner"))
                if (!$util.isInteger(message.owner))
                    return "owner: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.movement != null && message.hasOwnProperty("movement"))
                if (!$util.isInteger(message.movement))
                    return "movement: integer expected";
            if (message.strength != null && message.hasOwnProperty("strength"))
                if (!$util.isInteger(message.strength))
                    return "strength: integer expected";
            if (message.vision != null && message.hasOwnProperty("vision"))
                if (!$util.isInteger(message.vision))
                    return "vision: integer expected";
            if (message.terrainCosts != null && message.hasOwnProperty("terrainCosts")) {
                if (!$util.isObject(message.terrainCosts))
                    return "terrainCosts: object expected";
                var key = Object.keys(message.terrainCosts);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "terrainCosts: integer key{k:uint32} expected";
                    if (!$util.isInteger(message.terrainCosts[key[i]]))
                        return "terrainCosts: integer{k:uint32} expected";
                }
            }
            if (message.capturing != null && message.hasOwnProperty("capturing"))
                if (typeof message.capturing !== "boolean")
                    return "capturing: boolean expected";
            if (message.pacifist != null && message.hasOwnProperty("pacifist"))
                if (typeof message.pacifist !== "boolean")
                    return "pacifist: boolean expected";
            if (message.flying != null && message.hasOwnProperty("flying"))
                if (typeof message.flying !== "boolean")
                    return "flying: boolean expected";
            if (message.attackModifier != null && message.hasOwnProperty("attackModifier"))
                if (!$util.isInteger(message.attackModifier))
                    return "attackModifier: integer expected";
            if (message.ranged != null && message.hasOwnProperty("ranged")) {
                var error = $root.awfdata.Unit.Ranged.verify(message.ranged);
                if (error)
                    return "ranged." + error;
            }
            if (message.moved != null && message.hasOwnProperty("moved"))
                if (typeof message.moved !== "boolean")
                    return "moved: boolean expected";
            return null;
        };

        /**
         * Creates an Unit message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof awfdata.Unit
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {awfdata.Unit} Unit
         */
        Unit.fromObject = function fromObject(object) {
            if (object instanceof $root.awfdata.Unit)
                return object;
            var message = new $root.awfdata.Unit();
            if (object.owner != null)
                message.owner = object.owner >>> 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.movement != null)
                message.movement = object.movement >>> 0;
            if (object.strength != null)
                message.strength = object.strength >>> 0;
            if (object.vision != null)
                message.vision = object.vision >>> 0;
            if (object.terrainCosts) {
                if (typeof object.terrainCosts !== "object")
                    throw TypeError(".awfdata.Unit.terrainCosts: object expected");
                message.terrainCosts = {};
                for (var keys = Object.keys(object.terrainCosts), i = 0; i < keys.length; ++i)
                    message.terrainCosts[keys[i]] = object.terrainCosts[keys[i]] >>> 0;
            }
            if (object.capturing != null)
                message.capturing = Boolean(object.capturing);
            if (object.pacifist != null)
                message.pacifist = Boolean(object.pacifist);
            if (object.flying != null)
                message.flying = Boolean(object.flying);
            if (object.attackModifier != null)
                message.attackModifier = object.attackModifier | 0;
            if (object.ranged != null) {
                if (typeof object.ranged !== "object")
                    throw TypeError(".awfdata.Unit.ranged: object expected");
                message.ranged = $root.awfdata.Unit.Ranged.fromObject(object.ranged);
            }
            if (object.moved != null)
                message.moved = Boolean(object.moved);
            return message;
        };

        /**
         * Creates a plain object from an Unit message. Also converts values to other types if specified.
         * @function toObject
         * @memberof awfdata.Unit
         * @static
         * @param {awfdata.Unit} message Unit
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Unit.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.terrainCosts = {};
            if (options.defaults) {
                object.name = "";
                object.movement = 0;
                object.strength = 0;
                object.vision = 0;
                object.capturing = false;
                object.pacifist = false;
                object.flying = false;
                object.attackModifier = 0;
                object.ranged = null;
                object.owner = 0;
                object.moved = false;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.movement != null && message.hasOwnProperty("movement"))
                object.movement = message.movement;
            if (message.strength != null && message.hasOwnProperty("strength"))
                object.strength = message.strength;
            if (message.vision != null && message.hasOwnProperty("vision"))
                object.vision = message.vision;
            if (message.capturing != null && message.hasOwnProperty("capturing"))
                object.capturing = message.capturing;
            if (message.pacifist != null && message.hasOwnProperty("pacifist"))
                object.pacifist = message.pacifist;
            if (message.flying != null && message.hasOwnProperty("flying"))
                object.flying = message.flying;
            if (message.attackModifier != null && message.hasOwnProperty("attackModifier"))
                object.attackModifier = message.attackModifier;
            if (message.ranged != null && message.hasOwnProperty("ranged"))
                object.ranged = $root.awfdata.Unit.Ranged.toObject(message.ranged, options);
            var keys2;
            if (message.terrainCosts && (keys2 = Object.keys(message.terrainCosts)).length) {
                object.terrainCosts = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.terrainCosts[keys2[j]] = message.terrainCosts[keys2[j]];
            }
            if (message.owner != null && message.hasOwnProperty("owner"))
                object.owner = message.owner;
            if (message.moved != null && message.hasOwnProperty("moved"))
                object.moved = message.moved;
            return object;
        };

        /**
         * Converts this Unit to JSON.
         * @function toJSON
         * @memberof awfdata.Unit
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Unit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        Unit.Ranged = (function() {

            /**
             * Properties of a Ranged.
             * @memberof awfdata.Unit
             * @interface IRanged
             * @property {number|null} [minimum] Ranged minimum
             * @property {number|null} [maximum] Ranged maximum
             */

            /**
             * Constructs a new Ranged.
             * @memberof awfdata.Unit
             * @classdesc Represents a Ranged.
             * @implements IRanged
             * @constructor
             * @param {awfdata.Unit.IRanged=} [properties] Properties to set
             */
            function Ranged(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Ranged minimum.
             * @member {number} minimum
             * @memberof awfdata.Unit.Ranged
             * @instance
             */
            Ranged.prototype.minimum = 0;

            /**
             * Ranged maximum.
             * @member {number} maximum
             * @memberof awfdata.Unit.Ranged
             * @instance
             */
            Ranged.prototype.maximum = 0;

            /**
             * Creates a new Ranged instance using the specified properties.
             * @function create
             * @memberof awfdata.Unit.Ranged
             * @static
             * @param {awfdata.Unit.IRanged=} [properties] Properties to set
             * @returns {awfdata.Unit.Ranged} Ranged instance
             */
            Ranged.create = function create(properties) {
                return new Ranged(properties);
            };

            /**
             * Encodes the specified Ranged message. Does not implicitly {@link awfdata.Unit.Ranged.verify|verify} messages.
             * @function encode
             * @memberof awfdata.Unit.Ranged
             * @static
             * @param {awfdata.Unit.IRanged} message Ranged message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Ranged.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.minimum != null && message.hasOwnProperty("minimum"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.minimum);
                if (message.maximum != null && message.hasOwnProperty("maximum"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.maximum);
                return writer;
            };

            /**
             * Encodes the specified Ranged message, length delimited. Does not implicitly {@link awfdata.Unit.Ranged.verify|verify} messages.
             * @function encodeDelimited
             * @memberof awfdata.Unit.Ranged
             * @static
             * @param {awfdata.Unit.IRanged} message Ranged message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Ranged.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Ranged message from the specified reader or buffer.
             * @function decode
             * @memberof awfdata.Unit.Ranged
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {awfdata.Unit.Ranged} Ranged
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Ranged.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.awfdata.Unit.Ranged();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.minimum = reader.uint32();
                        break;
                    case 2:
                        message.maximum = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Ranged message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof awfdata.Unit.Ranged
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {awfdata.Unit.Ranged} Ranged
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Ranged.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Ranged message.
             * @function verify
             * @memberof awfdata.Unit.Ranged
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Ranged.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.minimum != null && message.hasOwnProperty("minimum"))
                    if (!$util.isInteger(message.minimum))
                        return "minimum: integer expected";
                if (message.maximum != null && message.hasOwnProperty("maximum"))
                    if (!$util.isInteger(message.maximum))
                        return "maximum: integer expected";
                return null;
            };

            /**
             * Creates a Ranged message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof awfdata.Unit.Ranged
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {awfdata.Unit.Ranged} Ranged
             */
            Ranged.fromObject = function fromObject(object) {
                if (object instanceof $root.awfdata.Unit.Ranged)
                    return object;
                var message = new $root.awfdata.Unit.Ranged();
                if (object.minimum != null)
                    message.minimum = object.minimum >>> 0;
                if (object.maximum != null)
                    message.maximum = object.maximum >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a Ranged message. Also converts values to other types if specified.
             * @function toObject
             * @memberof awfdata.Unit.Ranged
             * @static
             * @param {awfdata.Unit.Ranged} message Ranged
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Ranged.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.minimum = 0;
                    object.maximum = 0;
                }
                if (message.minimum != null && message.hasOwnProperty("minimum"))
                    object.minimum = message.minimum;
                if (message.maximum != null && message.hasOwnProperty("maximum"))
                    object.maximum = message.maximum;
                return object;
            };

            /**
             * Converts this Ranged to JSON.
             * @function toJSON
             * @memberof awfdata.Unit.Ranged
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Ranged.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Ranged;
        })();

        return Unit;
    })();

    awfdata.Game = (function() {

        /**
         * Properties of a Game.
         * @memberof awfdata
         * @interface IGame
         * @property {awfdata.IMap|null} [map] Game map
         * @property {Array.<awfdata.Game.IPlayer>|null} [players] Game players
         * @property {number|null} [activePlayer] Game activePlayer
         * @property {number|null} [turn] Game turn
         */

        /**
         * Constructs a new Game.
         * @memberof awfdata
         * @classdesc Represents a Game.
         * @implements IGame
         * @constructor
         * @param {awfdata.IGame=} [properties] Properties to set
         */
        function Game(properties) {
            this.players = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Game map.
         * @member {awfdata.IMap|null|undefined} map
         * @memberof awfdata.Game
         * @instance
         */
        Game.prototype.map = null;

        /**
         * Game players.
         * @member {Array.<awfdata.Game.IPlayer>} players
         * @memberof awfdata.Game
         * @instance
         */
        Game.prototype.players = $util.emptyArray;

        /**
         * Game activePlayer.
         * @member {number} activePlayer
         * @memberof awfdata.Game
         * @instance
         */
        Game.prototype.activePlayer = 0;

        /**
         * Game turn.
         * @member {number} turn
         * @memberof awfdata.Game
         * @instance
         */
        Game.prototype.turn = 0;

        /**
         * Creates a new Game instance using the specified properties.
         * @function create
         * @memberof awfdata.Game
         * @static
         * @param {awfdata.IGame=} [properties] Properties to set
         * @returns {awfdata.Game} Game instance
         */
        Game.create = function create(properties) {
            return new Game(properties);
        };

        /**
         * Encodes the specified Game message. Does not implicitly {@link awfdata.Game.verify|verify} messages.
         * @function encode
         * @memberof awfdata.Game
         * @static
         * @param {awfdata.IGame} message Game message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Game.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.map != null && message.hasOwnProperty("map"))
                $root.awfdata.Map.encode(message.map, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.players != null && message.players.length)
                for (var i = 0; i < message.players.length; ++i)
                    $root.awfdata.Game.Player.encode(message.players[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.activePlayer != null && message.hasOwnProperty("activePlayer"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.activePlayer);
            if (message.turn != null && message.hasOwnProperty("turn"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.turn);
            return writer;
        };

        /**
         * Encodes the specified Game message, length delimited. Does not implicitly {@link awfdata.Game.verify|verify} messages.
         * @function encodeDelimited
         * @memberof awfdata.Game
         * @static
         * @param {awfdata.IGame} message Game message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Game.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Game message from the specified reader or buffer.
         * @function decode
         * @memberof awfdata.Game
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {awfdata.Game} Game
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Game.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.awfdata.Game();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.map = $root.awfdata.Map.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.players && message.players.length))
                        message.players = [];
                    message.players.push($root.awfdata.Game.Player.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.activePlayer = reader.uint32();
                    break;
                case 4:
                    message.turn = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Game message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof awfdata.Game
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {awfdata.Game} Game
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Game.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Game message.
         * @function verify
         * @memberof awfdata.Game
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Game.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.map != null && message.hasOwnProperty("map")) {
                var error = $root.awfdata.Map.verify(message.map);
                if (error)
                    return "map." + error;
            }
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!Array.isArray(message.players))
                    return "players: array expected";
                for (var i = 0; i < message.players.length; ++i) {
                    var error = $root.awfdata.Game.Player.verify(message.players[i]);
                    if (error)
                        return "players." + error;
                }
            }
            if (message.activePlayer != null && message.hasOwnProperty("activePlayer"))
                if (!$util.isInteger(message.activePlayer))
                    return "activePlayer: integer expected";
            if (message.turn != null && message.hasOwnProperty("turn"))
                if (!$util.isInteger(message.turn))
                    return "turn: integer expected";
            return null;
        };

        /**
         * Creates a Game message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof awfdata.Game
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {awfdata.Game} Game
         */
        Game.fromObject = function fromObject(object) {
            if (object instanceof $root.awfdata.Game)
                return object;
            var message = new $root.awfdata.Game();
            if (object.map != null) {
                if (typeof object.map !== "object")
                    throw TypeError(".awfdata.Game.map: object expected");
                message.map = $root.awfdata.Map.fromObject(object.map);
            }
            if (object.players) {
                if (!Array.isArray(object.players))
                    throw TypeError(".awfdata.Game.players: array expected");
                message.players = [];
                for (var i = 0; i < object.players.length; ++i) {
                    if (typeof object.players[i] !== "object")
                        throw TypeError(".awfdata.Game.players: object expected");
                    message.players[i] = $root.awfdata.Game.Player.fromObject(object.players[i]);
                }
            }
            if (object.activePlayer != null)
                message.activePlayer = object.activePlayer >>> 0;
            if (object.turn != null)
                message.turn = object.turn >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Game message. Also converts values to other types if specified.
         * @function toObject
         * @memberof awfdata.Game
         * @static
         * @param {awfdata.Game} message Game
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Game.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.players = [];
            if (options.defaults) {
                object.map = null;
                object.activePlayer = 0;
                object.turn = 0;
            }
            if (message.map != null && message.hasOwnProperty("map"))
                object.map = $root.awfdata.Map.toObject(message.map, options);
            if (message.players && message.players.length) {
                object.players = [];
                for (var j = 0; j < message.players.length; ++j)
                    object.players[j] = $root.awfdata.Game.Player.toObject(message.players[j], options);
            }
            if (message.activePlayer != null && message.hasOwnProperty("activePlayer"))
                object.activePlayer = message.activePlayer;
            if (message.turn != null && message.hasOwnProperty("turn"))
                object.turn = message.turn;
            return object;
        };

        /**
         * Converts this Game to JSON.
         * @function toJSON
         * @memberof awfdata.Game
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Game.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        Game.Player = (function() {

            /**
             * Properties of a Player.
             * @memberof awfdata.Game
             * @interface IPlayer
             * @property {awfdata.IFaction|null} [faction] Player faction
             */

            /**
             * Constructs a new Player.
             * @memberof awfdata.Game
             * @classdesc Represents a Player.
             * @implements IPlayer
             * @constructor
             * @param {awfdata.Game.IPlayer=} [properties] Properties to set
             */
            function Player(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Player faction.
             * @member {awfdata.IFaction|null|undefined} faction
             * @memberof awfdata.Game.Player
             * @instance
             */
            Player.prototype.faction = null;

            /**
             * Creates a new Player instance using the specified properties.
             * @function create
             * @memberof awfdata.Game.Player
             * @static
             * @param {awfdata.Game.IPlayer=} [properties] Properties to set
             * @returns {awfdata.Game.Player} Player instance
             */
            Player.create = function create(properties) {
                return new Player(properties);
            };

            /**
             * Encodes the specified Player message. Does not implicitly {@link awfdata.Game.Player.verify|verify} messages.
             * @function encode
             * @memberof awfdata.Game.Player
             * @static
             * @param {awfdata.Game.IPlayer} message Player message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Player.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.faction != null && message.hasOwnProperty("faction"))
                    $root.awfdata.Faction.encode(message.faction, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Player message, length delimited. Does not implicitly {@link awfdata.Game.Player.verify|verify} messages.
             * @function encodeDelimited
             * @memberof awfdata.Game.Player
             * @static
             * @param {awfdata.Game.IPlayer} message Player message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Player.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Player message from the specified reader or buffer.
             * @function decode
             * @memberof awfdata.Game.Player
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {awfdata.Game.Player} Player
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Player.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.awfdata.Game.Player();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.faction = $root.awfdata.Faction.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Player message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof awfdata.Game.Player
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {awfdata.Game.Player} Player
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Player.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Player message.
             * @function verify
             * @memberof awfdata.Game.Player
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Player.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.faction != null && message.hasOwnProperty("faction")) {
                    var error = $root.awfdata.Faction.verify(message.faction);
                    if (error)
                        return "faction." + error;
                }
                return null;
            };

            /**
             * Creates a Player message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof awfdata.Game.Player
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {awfdata.Game.Player} Player
             */
            Player.fromObject = function fromObject(object) {
                if (object instanceof $root.awfdata.Game.Player)
                    return object;
                var message = new $root.awfdata.Game.Player();
                if (object.faction != null) {
                    if (typeof object.faction !== "object")
                        throw TypeError(".awfdata.Game.Player.faction: object expected");
                    message.faction = $root.awfdata.Faction.fromObject(object.faction);
                }
                return message;
            };

            /**
             * Creates a plain object from a Player message. Also converts values to other types if specified.
             * @function toObject
             * @memberof awfdata.Game.Player
             * @static
             * @param {awfdata.Game.Player} message Player
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Player.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.faction = null;
                if (message.faction != null && message.hasOwnProperty("faction"))
                    object.faction = $root.awfdata.Faction.toObject(message.faction, options);
                return object;
            };

            /**
             * Converts this Player to JSON.
             * @function toJSON
             * @memberof awfdata.Game.Player
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Player.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Player;
        })();

        return Game;
    })();

    awfdata.Map = (function() {

        /**
         * Properties of a Map.
         * @memberof awfdata
         * @interface IMap
         * @property {number|null} [width] Map width
         * @property {number|null} [height] Map height
         * @property {Array.<awfdata.Map.ITile>|null} [tiles] Map tiles
         * @property {Object.<string,awfdata.ITerrain>|null} [terrain] Map terrain
         */

        /**
         * Constructs a new Map.
         * @memberof awfdata
         * @classdesc Represents a Map.
         * @implements IMap
         * @constructor
         * @param {awfdata.IMap=} [properties] Properties to set
         */
        function Map(properties) {
            this.tiles = [];
            this.terrain = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Map width.
         * @member {number} width
         * @memberof awfdata.Map
         * @instance
         */
        Map.prototype.width = 0;

        /**
         * Map height.
         * @member {number} height
         * @memberof awfdata.Map
         * @instance
         */
        Map.prototype.height = 0;

        /**
         * Map tiles.
         * @member {Array.<awfdata.Map.ITile>} tiles
         * @memberof awfdata.Map
         * @instance
         */
        Map.prototype.tiles = $util.emptyArray;

        /**
         * Map terrain.
         * @member {Object.<string,awfdata.ITerrain>} terrain
         * @memberof awfdata.Map
         * @instance
         */
        Map.prototype.terrain = $util.emptyObject;

        /**
         * Creates a new Map instance using the specified properties.
         * @function create
         * @memberof awfdata.Map
         * @static
         * @param {awfdata.IMap=} [properties] Properties to set
         * @returns {awfdata.Map} Map instance
         */
        Map.create = function create(properties) {
            return new Map(properties);
        };

        /**
         * Encodes the specified Map message. Does not implicitly {@link awfdata.Map.verify|verify} messages.
         * @function encode
         * @memberof awfdata.Map
         * @static
         * @param {awfdata.IMap} message Map message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Map.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.width != null && message.hasOwnProperty("width"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.width);
            if (message.height != null && message.hasOwnProperty("height"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.height);
            if (message.tiles != null && message.tiles.length)
                for (var i = 0; i < message.tiles.length; ++i)
                    $root.awfdata.Map.Tile.encode(message.tiles[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.terrain != null && message.hasOwnProperty("terrain"))
                for (var keys = Object.keys(message.terrain), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]);
                    $root.awfdata.Terrain.encode(message.terrain[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Encodes the specified Map message, length delimited. Does not implicitly {@link awfdata.Map.verify|verify} messages.
         * @function encodeDelimited
         * @memberof awfdata.Map
         * @static
         * @param {awfdata.IMap} message Map message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Map.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Map message from the specified reader or buffer.
         * @function decode
         * @memberof awfdata.Map
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {awfdata.Map} Map
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Map.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.awfdata.Map(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.width = reader.uint32();
                    break;
                case 2:
                    message.height = reader.uint32();
                    break;
                case 3:
                    if (!(message.tiles && message.tiles.length))
                        message.tiles = [];
                    message.tiles.push($root.awfdata.Map.Tile.decode(reader, reader.uint32()));
                    break;
                case 4:
                    reader.skip().pos++;
                    if (message.terrain === $util.emptyObject)
                        message.terrain = {};
                    key = reader.uint32();
                    reader.pos++;
                    message.terrain[key] = $root.awfdata.Terrain.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Map message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof awfdata.Map
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {awfdata.Map} Map
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Map.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Map message.
         * @function verify
         * @memberof awfdata.Map
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Map.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.width != null && message.hasOwnProperty("width"))
                if (!$util.isInteger(message.width))
                    return "width: integer expected";
            if (message.height != null && message.hasOwnProperty("height"))
                if (!$util.isInteger(message.height))
                    return "height: integer expected";
            if (message.tiles != null && message.hasOwnProperty("tiles")) {
                if (!Array.isArray(message.tiles))
                    return "tiles: array expected";
                for (var i = 0; i < message.tiles.length; ++i) {
                    var error = $root.awfdata.Map.Tile.verify(message.tiles[i]);
                    if (error)
                        return "tiles." + error;
                }
            }
            if (message.terrain != null && message.hasOwnProperty("terrain")) {
                if (!$util.isObject(message.terrain))
                    return "terrain: object expected";
                var key = Object.keys(message.terrain);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "terrain: integer key{k:uint32} expected";
                    {
                        var error = $root.awfdata.Terrain.verify(message.terrain[key[i]]);
                        if (error)
                            return "terrain." + error;
                    }
                }
            }
            return null;
        };

        /**
         * Creates a Map message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof awfdata.Map
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {awfdata.Map} Map
         */
        Map.fromObject = function fromObject(object) {
            if (object instanceof $root.awfdata.Map)
                return object;
            var message = new $root.awfdata.Map();
            if (object.width != null)
                message.width = object.width >>> 0;
            if (object.height != null)
                message.height = object.height >>> 0;
            if (object.tiles) {
                if (!Array.isArray(object.tiles))
                    throw TypeError(".awfdata.Map.tiles: array expected");
                message.tiles = [];
                for (var i = 0; i < object.tiles.length; ++i) {
                    if (typeof object.tiles[i] !== "object")
                        throw TypeError(".awfdata.Map.tiles: object expected");
                    message.tiles[i] = $root.awfdata.Map.Tile.fromObject(object.tiles[i]);
                }
            }
            if (object.terrain) {
                if (typeof object.terrain !== "object")
                    throw TypeError(".awfdata.Map.terrain: object expected");
                message.terrain = {};
                for (var keys = Object.keys(object.terrain), i = 0; i < keys.length; ++i) {
                    if (typeof object.terrain[keys[i]] !== "object")
                        throw TypeError(".awfdata.Map.terrain: object expected");
                    message.terrain[keys[i]] = $root.awfdata.Terrain.fromObject(object.terrain[keys[i]]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Map message. Also converts values to other types if specified.
         * @function toObject
         * @memberof awfdata.Map
         * @static
         * @param {awfdata.Map} message Map
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Map.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.tiles = [];
            if (options.objects || options.defaults)
                object.terrain = {};
            if (options.defaults) {
                object.width = 0;
                object.height = 0;
            }
            if (message.width != null && message.hasOwnProperty("width"))
                object.width = message.width;
            if (message.height != null && message.hasOwnProperty("height"))
                object.height = message.height;
            if (message.tiles && message.tiles.length) {
                object.tiles = [];
                for (var j = 0; j < message.tiles.length; ++j)
                    object.tiles[j] = $root.awfdata.Map.Tile.toObject(message.tiles[j], options);
            }
            var keys2;
            if (message.terrain && (keys2 = Object.keys(message.terrain)).length) {
                object.terrain = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.terrain[keys2[j]] = $root.awfdata.Terrain.toObject(message.terrain[keys2[j]], options);
            }
            return object;
        };

        /**
         * Converts this Map to JSON.
         * @function toJSON
         * @memberof awfdata.Map
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Map.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        Map.Tile = (function() {

            /**
             * Properties of a Tile.
             * @memberof awfdata.Map
             * @interface ITile
             * @property {number|null} [terrainId] Tile terrainId
             * @property {awfdata.IUnit|null} [unit] Tile unit
             */

            /**
             * Constructs a new Tile.
             * @memberof awfdata.Map
             * @classdesc Represents a Tile.
             * @implements ITile
             * @constructor
             * @param {awfdata.Map.ITile=} [properties] Properties to set
             */
            function Tile(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Tile terrainId.
             * @member {number} terrainId
             * @memberof awfdata.Map.Tile
             * @instance
             */
            Tile.prototype.terrainId = 0;

            /**
             * Tile unit.
             * @member {awfdata.IUnit|null|undefined} unit
             * @memberof awfdata.Map.Tile
             * @instance
             */
            Tile.prototype.unit = null;

            /**
             * Creates a new Tile instance using the specified properties.
             * @function create
             * @memberof awfdata.Map.Tile
             * @static
             * @param {awfdata.Map.ITile=} [properties] Properties to set
             * @returns {awfdata.Map.Tile} Tile instance
             */
            Tile.create = function create(properties) {
                return new Tile(properties);
            };

            /**
             * Encodes the specified Tile message. Does not implicitly {@link awfdata.Map.Tile.verify|verify} messages.
             * @function encode
             * @memberof awfdata.Map.Tile
             * @static
             * @param {awfdata.Map.ITile} message Tile message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Tile.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.terrainId != null && message.hasOwnProperty("terrainId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.terrainId);
                if (message.unit != null && message.hasOwnProperty("unit"))
                    $root.awfdata.Unit.encode(message.unit, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Tile message, length delimited. Does not implicitly {@link awfdata.Map.Tile.verify|verify} messages.
             * @function encodeDelimited
             * @memberof awfdata.Map.Tile
             * @static
             * @param {awfdata.Map.ITile} message Tile message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Tile.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Tile message from the specified reader or buffer.
             * @function decode
             * @memberof awfdata.Map.Tile
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {awfdata.Map.Tile} Tile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Tile.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.awfdata.Map.Tile();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.terrainId = reader.uint32();
                        break;
                    case 2:
                        message.unit = $root.awfdata.Unit.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Tile message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof awfdata.Map.Tile
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {awfdata.Map.Tile} Tile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Tile.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Tile message.
             * @function verify
             * @memberof awfdata.Map.Tile
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Tile.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.terrainId != null && message.hasOwnProperty("terrainId"))
                    if (!$util.isInteger(message.terrainId))
                        return "terrainId: integer expected";
                if (message.unit != null && message.hasOwnProperty("unit")) {
                    var error = $root.awfdata.Unit.verify(message.unit);
                    if (error)
                        return "unit." + error;
                }
                return null;
            };

            /**
             * Creates a Tile message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof awfdata.Map.Tile
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {awfdata.Map.Tile} Tile
             */
            Tile.fromObject = function fromObject(object) {
                if (object instanceof $root.awfdata.Map.Tile)
                    return object;
                var message = new $root.awfdata.Map.Tile();
                if (object.terrainId != null)
                    message.terrainId = object.terrainId >>> 0;
                if (object.unit != null) {
                    if (typeof object.unit !== "object")
                        throw TypeError(".awfdata.Map.Tile.unit: object expected");
                    message.unit = $root.awfdata.Unit.fromObject(object.unit);
                }
                return message;
            };

            /**
             * Creates a plain object from a Tile message. Also converts values to other types if specified.
             * @function toObject
             * @memberof awfdata.Map.Tile
             * @static
             * @param {awfdata.Map.Tile} message Tile
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Tile.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.terrainId = 0;
                    object.unit = null;
                }
                if (message.terrainId != null && message.hasOwnProperty("terrainId"))
                    object.terrainId = message.terrainId;
                if (message.unit != null && message.hasOwnProperty("unit"))
                    object.unit = $root.awfdata.Unit.toObject(message.unit, options);
                return object;
            };

            /**
             * Converts this Tile to JSON.
             * @function toJSON
             * @memberof awfdata.Map.Tile
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Tile.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Tile;
        })();

        return Map;
    })();

    awfdata.Terrain = (function() {

        /**
         * Properties of a Terrain.
         * @memberof awfdata
         * @interface ITerrain
         * @property {string|null} [name] Terrain name
         * @property {number|null} [id] Terrain id
         * @property {boolean|null} [water] Terrain water
         * @property {boolean|null} [objective] Terrain objective
         * @property {boolean|null} [concealing] Terrain concealing
         * @property {number|null} [defenseModifier] Terrain defenseModifier
         */

        /**
         * Constructs a new Terrain.
         * @memberof awfdata
         * @classdesc Represents a Terrain.
         * @implements ITerrain
         * @constructor
         * @param {awfdata.ITerrain=} [properties] Properties to set
         */
        function Terrain(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Terrain name.
         * @member {string} name
         * @memberof awfdata.Terrain
         * @instance
         */
        Terrain.prototype.name = "";

        /**
         * Terrain id.
         * @member {number} id
         * @memberof awfdata.Terrain
         * @instance
         */
        Terrain.prototype.id = 0;

        /**
         * Terrain water.
         * @member {boolean} water
         * @memberof awfdata.Terrain
         * @instance
         */
        Terrain.prototype.water = false;

        /**
         * Terrain objective.
         * @member {boolean} objective
         * @memberof awfdata.Terrain
         * @instance
         */
        Terrain.prototype.objective = false;

        /**
         * Terrain concealing.
         * @member {boolean} concealing
         * @memberof awfdata.Terrain
         * @instance
         */
        Terrain.prototype.concealing = false;

        /**
         * Terrain defenseModifier.
         * @member {number} defenseModifier
         * @memberof awfdata.Terrain
         * @instance
         */
        Terrain.prototype.defenseModifier = 0;

        /**
         * Creates a new Terrain instance using the specified properties.
         * @function create
         * @memberof awfdata.Terrain
         * @static
         * @param {awfdata.ITerrain=} [properties] Properties to set
         * @returns {awfdata.Terrain} Terrain instance
         */
        Terrain.create = function create(properties) {
            return new Terrain(properties);
        };

        /**
         * Encodes the specified Terrain message. Does not implicitly {@link awfdata.Terrain.verify|verify} messages.
         * @function encode
         * @memberof awfdata.Terrain
         * @static
         * @param {awfdata.ITerrain} message Terrain message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Terrain.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.water != null && message.hasOwnProperty("water"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.water);
            if (message.objective != null && message.hasOwnProperty("objective"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.objective);
            if (message.concealing != null && message.hasOwnProperty("concealing"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.concealing);
            if (message.defenseModifier != null && message.hasOwnProperty("defenseModifier"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.defenseModifier);
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.id);
            return writer;
        };

        /**
         * Encodes the specified Terrain message, length delimited. Does not implicitly {@link awfdata.Terrain.verify|verify} messages.
         * @function encodeDelimited
         * @memberof awfdata.Terrain
         * @static
         * @param {awfdata.ITerrain} message Terrain message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Terrain.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Terrain message from the specified reader or buffer.
         * @function decode
         * @memberof awfdata.Terrain
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {awfdata.Terrain} Terrain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Terrain.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.awfdata.Terrain();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 6:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.water = reader.bool();
                    break;
                case 3:
                    message.objective = reader.bool();
                    break;
                case 4:
                    message.concealing = reader.bool();
                    break;
                case 5:
                    message.defenseModifier = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Terrain message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof awfdata.Terrain
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {awfdata.Terrain} Terrain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Terrain.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Terrain message.
         * @function verify
         * @memberof awfdata.Terrain
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Terrain.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.water != null && message.hasOwnProperty("water"))
                if (typeof message.water !== "boolean")
                    return "water: boolean expected";
            if (message.objective != null && message.hasOwnProperty("objective"))
                if (typeof message.objective !== "boolean")
                    return "objective: boolean expected";
            if (message.concealing != null && message.hasOwnProperty("concealing"))
                if (typeof message.concealing !== "boolean")
                    return "concealing: boolean expected";
            if (message.defenseModifier != null && message.hasOwnProperty("defenseModifier"))
                if (!$util.isInteger(message.defenseModifier))
                    return "defenseModifier: integer expected";
            return null;
        };

        /**
         * Creates a Terrain message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof awfdata.Terrain
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {awfdata.Terrain} Terrain
         */
        Terrain.fromObject = function fromObject(object) {
            if (object instanceof $root.awfdata.Terrain)
                return object;
            var message = new $root.awfdata.Terrain();
            if (object.name != null)
                message.name = String(object.name);
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.water != null)
                message.water = Boolean(object.water);
            if (object.objective != null)
                message.objective = Boolean(object.objective);
            if (object.concealing != null)
                message.concealing = Boolean(object.concealing);
            if (object.defenseModifier != null)
                message.defenseModifier = object.defenseModifier | 0;
            return message;
        };

        /**
         * Creates a plain object from a Terrain message. Also converts values to other types if specified.
         * @function toObject
         * @memberof awfdata.Terrain
         * @static
         * @param {awfdata.Terrain} message Terrain
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Terrain.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.water = false;
                object.objective = false;
                object.concealing = false;
                object.defenseModifier = 0;
                object.id = 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.water != null && message.hasOwnProperty("water"))
                object.water = message.water;
            if (message.objective != null && message.hasOwnProperty("objective"))
                object.objective = message.objective;
            if (message.concealing != null && message.hasOwnProperty("concealing"))
                object.concealing = message.concealing;
            if (message.defenseModifier != null && message.hasOwnProperty("defenseModifier"))
                object.defenseModifier = message.defenseModifier;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this Terrain to JSON.
         * @function toJSON
         * @memberof awfdata.Terrain
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Terrain.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Terrain;
    })();

    awfdata.GameConfig = (function() {

        /**
         * Properties of a GameConfig.
         * @memberof awfdata
         * @interface IGameConfig
         * @property {Array.<awfdata.ITerrain>|null} [terrain] GameConfig terrain
         * @property {Array.<awfdata.IFaction>|null} [factions] GameConfig factions
         */

        /**
         * Constructs a new GameConfig.
         * @memberof awfdata
         * @classdesc Represents a GameConfig.
         * @implements IGameConfig
         * @constructor
         * @param {awfdata.IGameConfig=} [properties] Properties to set
         */
        function GameConfig(properties) {
            this.terrain = [];
            this.factions = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameConfig terrain.
         * @member {Array.<awfdata.ITerrain>} terrain
         * @memberof awfdata.GameConfig
         * @instance
         */
        GameConfig.prototype.terrain = $util.emptyArray;

        /**
         * GameConfig factions.
         * @member {Array.<awfdata.IFaction>} factions
         * @memberof awfdata.GameConfig
         * @instance
         */
        GameConfig.prototype.factions = $util.emptyArray;

        /**
         * Creates a new GameConfig instance using the specified properties.
         * @function create
         * @memberof awfdata.GameConfig
         * @static
         * @param {awfdata.IGameConfig=} [properties] Properties to set
         * @returns {awfdata.GameConfig} GameConfig instance
         */
        GameConfig.create = function create(properties) {
            return new GameConfig(properties);
        };

        /**
         * Encodes the specified GameConfig message. Does not implicitly {@link awfdata.GameConfig.verify|verify} messages.
         * @function encode
         * @memberof awfdata.GameConfig
         * @static
         * @param {awfdata.IGameConfig} message GameConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.terrain != null && message.terrain.length)
                for (var i = 0; i < message.terrain.length; ++i)
                    $root.awfdata.Terrain.encode(message.terrain[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.factions != null && message.factions.length)
                for (var i = 0; i < message.factions.length; ++i)
                    $root.awfdata.Faction.encode(message.factions[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GameConfig message, length delimited. Does not implicitly {@link awfdata.GameConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof awfdata.GameConfig
         * @static
         * @param {awfdata.IGameConfig} message GameConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameConfig message from the specified reader or buffer.
         * @function decode
         * @memberof awfdata.GameConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {awfdata.GameConfig} GameConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.awfdata.GameConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.terrain && message.terrain.length))
                        message.terrain = [];
                    message.terrain.push($root.awfdata.Terrain.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.factions && message.factions.length))
                        message.factions = [];
                    message.factions.push($root.awfdata.Faction.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof awfdata.GameConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {awfdata.GameConfig} GameConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameConfig message.
         * @function verify
         * @memberof awfdata.GameConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.terrain != null && message.hasOwnProperty("terrain")) {
                if (!Array.isArray(message.terrain))
                    return "terrain: array expected";
                for (var i = 0; i < message.terrain.length; ++i) {
                    var error = $root.awfdata.Terrain.verify(message.terrain[i]);
                    if (error)
                        return "terrain." + error;
                }
            }
            if (message.factions != null && message.hasOwnProperty("factions")) {
                if (!Array.isArray(message.factions))
                    return "factions: array expected";
                for (var i = 0; i < message.factions.length; ++i) {
                    var error = $root.awfdata.Faction.verify(message.factions[i]);
                    if (error)
                        return "factions." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GameConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof awfdata.GameConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {awfdata.GameConfig} GameConfig
         */
        GameConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.awfdata.GameConfig)
                return object;
            var message = new $root.awfdata.GameConfig();
            if (object.terrain) {
                if (!Array.isArray(object.terrain))
                    throw TypeError(".awfdata.GameConfig.terrain: array expected");
                message.terrain = [];
                for (var i = 0; i < object.terrain.length; ++i) {
                    if (typeof object.terrain[i] !== "object")
                        throw TypeError(".awfdata.GameConfig.terrain: object expected");
                    message.terrain[i] = $root.awfdata.Terrain.fromObject(object.terrain[i]);
                }
            }
            if (object.factions) {
                if (!Array.isArray(object.factions))
                    throw TypeError(".awfdata.GameConfig.factions: array expected");
                message.factions = [];
                for (var i = 0; i < object.factions.length; ++i) {
                    if (typeof object.factions[i] !== "object")
                        throw TypeError(".awfdata.GameConfig.factions: object expected");
                    message.factions[i] = $root.awfdata.Faction.fromObject(object.factions[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GameConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof awfdata.GameConfig
         * @static
         * @param {awfdata.GameConfig} message GameConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.terrain = [];
                object.factions = [];
            }
            if (message.terrain && message.terrain.length) {
                object.terrain = [];
                for (var j = 0; j < message.terrain.length; ++j)
                    object.terrain[j] = $root.awfdata.Terrain.toObject(message.terrain[j], options);
            }
            if (message.factions && message.factions.length) {
                object.factions = [];
                for (var j = 0; j < message.factions.length; ++j)
                    object.factions[j] = $root.awfdata.Faction.toObject(message.factions[j], options);
            }
            return object;
        };

        /**
         * Converts this GameConfig to JSON.
         * @function toJSON
         * @memberof awfdata.GameConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameConfig;
    })();

    awfdata.Placeholder = (function() {

        /**
         * Properties of a Placeholder.
         * @memberof awfdata
         * @interface IPlaceholder
         * @property {number|null} [sampleField] Placeholder sampleField
         */

        /**
         * Constructs a new Placeholder.
         * @memberof awfdata
         * @classdesc Represents a Placeholder.
         * @implements IPlaceholder
         * @constructor
         * @param {awfdata.IPlaceholder=} [properties] Properties to set
         */
        function Placeholder(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Placeholder sampleField.
         * @member {number} sampleField
         * @memberof awfdata.Placeholder
         * @instance
         */
        Placeholder.prototype.sampleField = 0;

        /**
         * Creates a new Placeholder instance using the specified properties.
         * @function create
         * @memberof awfdata.Placeholder
         * @static
         * @param {awfdata.IPlaceholder=} [properties] Properties to set
         * @returns {awfdata.Placeholder} Placeholder instance
         */
        Placeholder.create = function create(properties) {
            return new Placeholder(properties);
        };

        /**
         * Encodes the specified Placeholder message. Does not implicitly {@link awfdata.Placeholder.verify|verify} messages.
         * @function encode
         * @memberof awfdata.Placeholder
         * @static
         * @param {awfdata.IPlaceholder} message Placeholder message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Placeholder.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sampleField != null && message.hasOwnProperty("sampleField"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.sampleField);
            return writer;
        };

        /**
         * Encodes the specified Placeholder message, length delimited. Does not implicitly {@link awfdata.Placeholder.verify|verify} messages.
         * @function encodeDelimited
         * @memberof awfdata.Placeholder
         * @static
         * @param {awfdata.IPlaceholder} message Placeholder message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Placeholder.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Placeholder message from the specified reader or buffer.
         * @function decode
         * @memberof awfdata.Placeholder
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {awfdata.Placeholder} Placeholder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Placeholder.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.awfdata.Placeholder();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sampleField = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Placeholder message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof awfdata.Placeholder
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {awfdata.Placeholder} Placeholder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Placeholder.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Placeholder message.
         * @function verify
         * @memberof awfdata.Placeholder
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Placeholder.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sampleField != null && message.hasOwnProperty("sampleField"))
                if (typeof message.sampleField !== "number")
                    return "sampleField: number expected";
            return null;
        };

        /**
         * Creates a Placeholder message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof awfdata.Placeholder
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {awfdata.Placeholder} Placeholder
         */
        Placeholder.fromObject = function fromObject(object) {
            if (object instanceof $root.awfdata.Placeholder)
                return object;
            var message = new $root.awfdata.Placeholder();
            if (object.sampleField != null)
                message.sampleField = Number(object.sampleField);
            return message;
        };

        /**
         * Creates a plain object from a Placeholder message. Also converts values to other types if specified.
         * @function toObject
         * @memberof awfdata.Placeholder
         * @static
         * @param {awfdata.Placeholder} message Placeholder
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Placeholder.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.sampleField = 0;
            if (message.sampleField != null && message.hasOwnProperty("sampleField"))
                object.sampleField = options.json && !isFinite(message.sampleField) ? String(message.sampleField) : message.sampleField;
            return object;
        };

        /**
         * Converts this Placeholder to JSON.
         * @function toJSON
         * @memberof awfdata.Placeholder
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Placeholder.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Placeholder;
    })();

    return awfdata;
})();

module.exports = $root;
