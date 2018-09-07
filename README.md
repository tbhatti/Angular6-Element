# ElementAngular

This is simple example of Angular Element, this project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## NOTE: 
"target": "es2015" added in tsconfig.json, // This line solve the problem uncaught typeerror: failed to construct 'htmlelement': please use the 'new' operator

## To Add element to any other non-Angular Project or simple html page

# 1. Under project folder, create elements-build.js file:
const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        './dist/ElementAngular/runtime.js',
        './dist/ElementAngular/polyfills.js',
        './dist/ElementAngular/scripts.js',
        './dist/ElementAngular/main.js',
    ]

    await fs.ensureDir('elements');

    await concat(files, 'elements/incrementor-element.js');

    await fs.copyFile('./dist/ElementAngular/styles.css', 'elements/styles.css');

})()

# 2.In package.json, add a build command to NPM scripts:

"scripts": {
    "build:elements": "ng build --prod --output-hashing none && node elements-build.js"
  }
  
# 3.  Run command: npm run build:elements, we can see that the project tree is updated:
