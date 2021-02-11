# Typescript Boilerplate

This project can be used as base for typescript projects. There are different webpack configurations included to create a minified version for direct integration into a webpage, an npm package and a development version with source maps.

## Minified Version

Build: _npm run build_

Intended to be directly loaded into an HTML page using the _script_ tag. The _minifiedLibraryName_ you specify in _projectInfo.js_ will be the variable name by which you can use the library in the homepage. The _minifiedLibraryFileName_ will be the name you use as the _src_ in the _script_ tag.

For the minified version, terser is used to minify the code. If you prepend all private properties and methods with an underscore, terser will minimize those names. Console logs are also removed. For debugging build the *Developement Version*, which will still include the console logs.

## Npm Version

Build: _npm run build:npm_

An ES6 module is created and place in the lib folder. Using ES6 here, allows code that uses this package to tree-shake the imports.

You need to _npm install typescript -g_ to be able to run build the npm version.

## Development Version

Build: _npm run build:dev_

It will also build a lib that can be integrated directly into a homepage - same as the minified version - but it will include source maps for debugging.