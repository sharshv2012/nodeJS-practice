//Events
// event driven programming
// events module is used to create, fire and listen to events
// events module is a core module in node.js
// EventEmitter is a class that is used to bind events and event listeners

import EventEmitter from 'events';

const myEmitter = new EventEmitter();

// on is used to listen to an event
// emit is used to emit an event

myEmitter.on('respons', () => {
    console.log('data received');
})

myEmitter.on('respons', () => {
    console.log('data received successfully');
})

myEmitter.emit('respons')


// the order of the event listener is important,
// we have to listen to the event before emitting it.

// we can also pass arguments to the event listener

myEmitter.on('hii', (name, id) => {
    console.log(`Hiii! ${name}, your id is ${id}`);
})

myEmitter.emit('hii', 'john', 34)