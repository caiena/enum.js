import 'core-js/modules/es.array.iterator';
import 'core-js/modules/es.object.freeze';
import 'core-js/modules/es.object.keys';
import 'core-js/modules/es.object.to-string';
import 'core-js/modules/es.object.values';
import 'core-js/modules/web.dom-collections.iterator';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var Enum =
/*#__PURE__*/
function () {
  function Enum(values) {
    _classCallCheck(this, Enum);

    this._data = Object.freeze(values);
    this._keys = Object.freeze(Object.keys(this._data));
    this._values = Object.freeze(Object.values(this._data));
  }

  _createClass(Enum, [{
    key: "has",
    value: function has(keyOrValue) {
      return this.hasKey(keyOrValue) || this.hasValue(keyOrValue);
    }
  }, {
    key: "hasKey",
    value: function hasKey(key) {
      return this.keys.indexOf(key) !== -1;
    }
  }, {
    key: "hasValue",
    value: function hasValue(value) {
      return this.values.indexOf(value) !== -1;
    }
    /**
     * Finds the enum key associated with a value. Or undefined if the value is not present in enum.
     *
     * usage:
     * ```
     *   lang = new Enum({ 'pt-BR': 1, 'en-US': 2 })
     *   lang.key(1) // === 'pt-BR'
     *   lang.key(2) // === 'en-US'
     *   lang.key(3) // === undefined
     * ```
     *
     * @param  {Integer} value Enum value to be found
     * @return {String}        Key associated with the value, or undefined if value is not present.
     */

  }, {
    key: "key",
    value: function key(valueOrKey) {
      if (this.hasValue(valueOrKey)) return this.keyForValue(valueOrKey);
      if (this.hasKey(valueOrKey)) return valueOrKey; // try to coerce "value" to "integer" and check it

      if (typeof valueOrKey === 'string') {
        var value = parseInt(valueOrKey, 10);
        if (isNaN(value)) return undefined;
        if (this.hasValue(value)) return this.keyForValue(value);
      }

      return undefined;
    }
  }, {
    key: "keyForValue",
    value: function keyForValue(value) {
      var idx = this.values.indexOf(value);
      if (idx === -1) return undefined;
      return this.keys[idx];
    }
    /**
     * Finds the value associated with the key. Or undefined if the key is not present in enum.
     *
     * usage:
     * ```
     *   lang = new Enum({ 'pt-BR': 1, 'en-US': 2 })
     *   lang.value('pt-BR') // === 1
     *   lang.value('en-US') // === 2
     *   lang.value('es-ES') // === undefined
     * ```
     *
     * @param  {[type]} key [description]
     * @return {[type]}     [description]
     */

  }, {
    key: "value",
    value: function value(keyOrValue) {
      if (this.hasKey(keyOrValue)) return this.valueForKey(keyOrValue);

      if (this.hasValue(keyOrValue)) {
        return keyOrValue;
      } // try to coerce "value" to "integer" and check it


      if (typeof keyOrValue === 'string') {
        var value = parseInt(keyOrValue, 10);
        if (isNaN(value)) return undefined;
        if (this.hasValue(value)) return value;
      }

      return undefined;
    }
  }, {
    key: "valueForKey",
    value: function valueForKey(key) {
      return this._data[key];
    }
  }, {
    key: "keys",
    get: function get() {
      return this._keys;
    }
  }, {
    key: "values",
    get: function get() {
      return this._values;
    }
  }, {
    key: "all",
    get: function get() {
      return this._data;
    }
  }]);

  return Enum;
}();

export default Enum;
