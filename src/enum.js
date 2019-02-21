
class Enum {
  constructor(values) {
    this._data = Object.freeze(values)

    this._keys = Object.freeze(Object.keys(this._data))
    this._values = Object.freeze(Object.values(this._data))
  }

  get keys() {
    return this._keys
  }

  get values() {
    return this._values
  }

  get all() {
    return this._data
  }

  has(keyOrValue) {
    return this.hasKey(keyOrValue) || this.hasValue(keyOrValue)
  }

  hasKey(key) {
    return this.keys.indexOf(key) !== -1
  }

  hasValue(value) {
    return this.values.indexOf(value) !== -1
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
  key(valueOrKey) {
    if (this.hasValue(valueOrKey)) return this.keyForValue(valueOrKey)

    if (this.hasKey(valueOrKey)) return valueOrKey

    // try to coerce "value" to "integer" and check it
    if (typeof valueOrKey === 'string') {
      let value = parseInt(valueOrKey, 10)
      if (isNaN(value)) return undefined

      if (this.hasValue(value)) return this.keyForValue(value)
    }

    return undefined
  }

  keyForValue(value) {
    let idx = this.values.indexOf(value)
    if (idx === -1) return undefined

    return this.keys[idx]
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
  value(keyOrValue) {
    if (this.hasKey(keyOrValue)) return this.valueForKey(keyOrValue)

    if (this.hasValue(keyOrValue)) {
      return keyOrValue
    }

    // try to coerce "value" to "integer" and check it
    if (typeof keyOrValue === 'string') {
      let value = parseInt(keyOrValue, 10)
      if (isNaN(value)) return undefined

      if (this.hasValue(value)) return value
    }

    return undefined
  }

  valueForKey(key) {
    return this._data[key]
  }
}


export default Enum
