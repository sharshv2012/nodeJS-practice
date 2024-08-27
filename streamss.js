// Streams

// Streams are objects that let you read data from a source or write data to a destination in continuous fashion.

// There are four types of streams in Node.js:

// Readable: Used for reading operations.
// Writable: Used for writing operations.
// Duplex: Used for both reading and writing operations.
// Transform: A type of duplex stream where the output is computed based on input.

// All streams are instances of EventEmitter.

 

import createReadStream, { read } from 'fs';

const readStream = createReadStream.createReadStream('./Public/home.html', {encoding: 'utf-8'});

readStream.on('data', (chunk) => {  // chunk is a buffer
    console.log('-----NEW CHUNK-----')
    console.log(chunk)
})  


// we don't send or access the whole file at once, we send it in chunks, this is the main advantage of streams.

// we can also use write stream to write the data in chunks.

// we can also use pipe to read and write the data in chunks.

import http from 'http'

import fs from 'fs'

const server = http.createServer((req , res) => {
    
    const readStream = fs.createReadStream('./Public/home.html', {encoding: 'utf-8'})
    readStream.on('open', () => {
        readStream.pipe(res)
    }) 
    readStream.on('error', (err) => {
        res.end(err)
    })
}).listen(8080)

// read stram has 'open' and 'error' events, we can use them to handle the errors and open the file.
// other events are 'data' and 'end' events.
// 'open' event is used to open the file and 'error' event is used to handle the errors.
// 'data' event is used to read the data in chunks and 'end' event is used to end the stream.