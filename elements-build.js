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