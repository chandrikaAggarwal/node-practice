/**
 * Example of core modules
 */

const path = require('path');

console.log('File name is ' + path.join(__filename));

console.log('Basename is ' + path.basename(__filename));

console.log('File extension is ' + path.extname(__filename));