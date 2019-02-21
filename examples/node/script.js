#!/usr/bin/env node

const path = require('path');
const distDir = path.join(__dirname, '..', '..', 'dist')

const Enum = require(path.join(distDir, 'enum.cjs.js'))

var locales = new Enum({ 'pt-BR': 1, 'en-US': 2 })
var content = `
  all:  ${JSON.stringify(locales.all)}
  keys: ${locales.keys}
  values: ${locales.values}
`

console.info(content)
