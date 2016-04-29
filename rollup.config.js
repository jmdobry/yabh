var babel = require('rollup-plugin-babel')

module.exports = {
  moduleName: 'BinaryHeap',
  moduleId: 'yabh',
  plugins: [
    babel({
      babelrc: false,
      presets: [
        'es2015-rollup'
      ],
      exclude: 'node_modules/**'
    })
  ]
}
