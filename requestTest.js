var request = require('request');
var fs = require('fs');

console.log('Downloading image...');
request.get('https://sytantris.github.io/http-examples/future.jpg')               
        .on('error', function (err) {
         throw err; 
        })
        .on('response', function (response) {                           
          console.log('\nResponse Status:\n', response.statusCode, '\nResponse Status Message:\n', response.statusMessage,'\nContent Type:\n',  response.headers['content-type']);
        })
        .pipe(fs.createWriteStream('./future.jpg'))
        .on('finish', function () {
          console.log('Download complete.');
        });
