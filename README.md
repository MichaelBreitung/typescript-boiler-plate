# Typescript Boilerplate

This project can be used as base for typescript projects. There are different webpack configurations included to create a minified version for direct integration into a webpage, an npm package and a development version with source maps.

## Minified Version

Build: _npm run build_

Intended to be directly loaded into an HTML page using the _script_ tag. The _minifiedLibraryName_ you specify in _projectInfo.js_ will be the variable name by which you can use the library in the homepage. The _minifiedLibraryFileName_ will be the name you use as the _src_ in the _script_ tag.

For the minified version, terser is used to minify the code. If you prepend all private properties and methods with an underscore, terser will minimize those names. Console logs are also removed. For debugging, build the *Developement Version*, which will still include the console logs.

## Npm Version (CommonJS + ES6)

Build: _npm run build:npm_

Builds a _CommonJS_ single file package and places it inside the *lib* folder. The type definitions are placed in the *lib-es6* folder together with the ES6 version of the library.

The *package.json* is setup to provide a *main*, *module* and *types* field. This way a project that uses your lib with Webpack or Rollup can make use of the ES6 version to enable tree shaking. The *CommonJS* version inside *lib* provides backwards compatibility.

**Note:** If you have a package that uses SVGs, this might not work in React.JS, if the *module* field is set. ES6 modules in a typical React.js project will not properly resolve SVGs as it's setup in this boilerplate. You might either want to only provide the *main* field, or include the SVGs directly in code without import.

## Development Version

Build: _npm run build:dev_

It will also build a lib that can be integrated directly into a homepage - same as the minified version - but it will include source maps for debugging.