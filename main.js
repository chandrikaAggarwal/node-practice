var http = require('http');

// http.createServer(function (request, response) {
//     response.writeHead(200, { 'Content-Type': 'text/plain' });
//     response.end('Hello World');
// }).listen(8081);

// console.log('Server running at localhost:8081');


/**
 * File based modules example
 */
const square = require('./square.js');
const calSquare = (a) => {
    console.log(`The value is ${a}`);
    console.log(`Area is ${square.area(a)}`);
    console.log(`Perimeter is ${square.perimeter(a)}`);
}

// calSquare(5);


/**
 * To get current filename and directory
 */
console.log(__filename);
console.log(__dirname);

