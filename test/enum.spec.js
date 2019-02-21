import Enum from '../src/enum'

describe('Enum', () => {

  describe('constructor', () => {
    it('accepts an object with name->value enumeration data', () => {
      let locales = new Enum({ 'pt-BR': 1, 'en-US': 2 })

      expect(locales.all).to.deep.equal({ 'pt-BR': 1, 'en-US': 2 })
    })
  })

  describe('instance methods', () => {
    let enumeration = new Enum({ 'pt-BR': 1, 'en-US': 2 })

    describe('get .all', () => {
      it('returns the object (keys->values) defining the enumeration', () => {
        expect(enumeration.all).to.deep.equal({ 'pt-BR': 1, 'en-US': 2 })
      })
    })

    describe('.has(key)', () => {
      let key = null

      context('when the key exists in the enumeration', () => {
        beforeEach(() => { key = 'pt-BR' })

        it('returns true', () => {
          expect(enumeration.has(key)).to.be.true
        })
      })

      context('when the key does not exist in the enumeration', () => {
        beforeEach(() => { key = 'zh-CN' })

        it('returns false', () => {
          expect(enumeration.has(key)).to.be.false
        })
      })
    })

    describe('.key(value)', () => {
      let value = null

      context('when the value exists in the enumeration', () => {
        beforeEach(() => { value = 1 })

        it('returns the enumeration key representing the value', () => {
          expect(enumeration.key(value)).to.equal('pt-BR')
        })
      })

      context('when the value does not exist in the enumeration', () => {
        beforeEach(() => { value = 32424 })

        it('returns undefined', () => {
          expect(enumeration.key(value)).to.be.undefined
        })
      })
    })

    describe('.value(key)', () => {
      let key = null

      context('when the key exists in the enumeration', () => {
        beforeEach(() => { key = 'pt-BR' })

        it('returns the enumeration key representing the key', () => {
          expect(enumeration.value(key)).to.equal(1)
        })
      })

      context('when the key does not exist in the enumeration', () => {
        beforeEach(() => { key = 'zh-CN' })

        it('returns undefined', () => {
          expect(enumeration.value(key)).to.be.undefined
        })
      })
    })

  }) // [end] instance methods

})
