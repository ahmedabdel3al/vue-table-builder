const mix = require('laravel-mix');
require('laravel-mix-purgecss');


mix.js('src/index', 'dist/index.js');
mix.webpackConfig({
  output: {
    libraryTarget: 'umd'
  }
})