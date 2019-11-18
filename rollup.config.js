import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import localResolve from 'rollup-plugin-local-resolve'
import babel from 'rollup-plugin-babel'
import pkg from './package.json'

export default [
  {
    input: 'src/index.js',
    output: {
      name: 'Enum',
      file: pkg.browser,
      format: 'umd'
    },
    plugins: [
      resolve(),  // so Rollup can find dependencies like `lodash` or `core-js`
      commonjs(), // so Rollup can transform dependencies in CommonJS to ESM
      babel({
        exclude: ['node_modules/**']
      })
    ]
  },

  // CommonJS (for Node 8+)
  {
    input: 'src/index.js',
    output: {
      file: pkg.main,
      format: 'cjs'
    },
    plugins: [
      localResolve(),
      babel({
        exclude: ['node_modules/**'],
        presets: [[
          "@babel/preset-env", {
            targets: {
              node: "8"
            }
          }
        ]]
      }),
    ]
  },

  // and ES module (for bundlers) build.
  {
    input: 'src/index.js',
    output: {
      file: pkg.module,
      format: 'esm'
    },
    plugins: [
      commonjs(),
      localResolve(),
      babel({
        exclude: ['node_modules/**']
      }),
    ]
  },
]
