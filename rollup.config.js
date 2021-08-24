import nodeResolve from "@rollup/plugin-node-resolve"
import commonjs    from "@rollup/plugin-commonjs"
import babel       from "@rollup/plugin-babel"

import pkg from './package.json'

const plugins = [
  babel({
    babelHelpers: "bundled",
    exclude:      ["node_modules/**"]
  }),
  nodeResolve(),
  commonjs()
]

export default [
  {
    input: 'src/index.js',
    output: {
      name: 'Enum',
      file: pkg.browser,
      format: 'umd'
    },
    // external: [],
    plugins
  },

  // CommonJS (for Node) and ES module (for bundlers) build
  {
    input: "src/index.js",
    output: [
      { file: pkg.main,   format: "cjs", sourcemap: true },
      { file: pkg.module, format: "es",  sourcemap: true }
    ],
    // external: [],
    plugins
  },
]
