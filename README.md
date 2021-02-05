# Typescript Boilerplate

This project can be used as base for typescript projects. There are different webpack configurations included to create a minified version for direct integration into a webpage, an npm package and a development version with source maps.

For the minified and the npm version, terser is used to minify the code. If you prepend all private properties and methods with an underscore, terser will minimize those names.