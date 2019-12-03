const path = require('path');
const fs = require('fs');

const http = require('http');
const hostname = 'localhost';
const port = 8081;

/**
 * @description Create Server
 */
const server = http.createServer((req, res) => {
    // console.log(req.headers);

    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/html');
    // res.end('<html><body><h1>Connection Successful</h1></body></html>');

    if (req.method == 'GET') {
        var fileURL = (req.url == '/') ? '/index.html' : req.url;
        var filePath = path.resolve('./public' + fileURL);
        var fileExt = path.extname(filePath);

        if (fileExt.toLowerCase() == '.html') {
            fs.exists(filePath, (exists) => {
                if (!exists) {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html');
                    res.end(`<html><body><h1>Error 404: ${filePath} not found </h1></body></html>`);
                }

                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                //res.end(`<html><body><h1>Error 404: Request not supported </h1></body></html>`);
                fs.createReadStream(filePath).pipe(res);
            })

        } else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end(`<html><body><h1>Error 404: ${filePath} is not an html file </h1></body></html>`);
        }

    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(`<html><body><h1>Error 404: Request not supported </h1></body></html>`);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});