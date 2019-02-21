# Releasing

## pre-testing
- `yarn run build`
- `bin/console`
  - enter the node REPL and interact with `Enum`, which is available globally
  - sample: `(new Enum({ one: 1, two: 2 })).keys` should output `['one', 'two']`


## publishing
- edit `package.json` file, bumping `version` key
- run `yarn publish` (a `yarn login` is probably required)
  + it'll ask for a new version and edit package.json if you provide it
