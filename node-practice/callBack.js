//call back functions are functions that are passed as arguments to other functions

// Callbacks are used to make sure that a function is not going to run before a task is completed but will run right after the task has completed. 
// It helps us develop asynchronous JavaScript code and keeps us safe from problems and errors.

console.log('Hello fuckin World!');
setTimeout(()=>{ // this gets offloaded as setTimeout is asynchronous.
    console.log('second')
}, 2000) // here 2000 is for delay
console.log('third')


setInterval(() => { // this is alsoo asynchronous
    console.log('haiyaa')
}, 2000) //here 2000 is for interval, it runs again then
console.log('this will run first')

// Event Loop in Node JS

const fetch = require('node-fetch')

//.......................Callbacks.......................


// setTimeout

setTimeout(() => {
    console.log("waited for 2sec")
}, 2000)

//nested Set Timeout

setTimeout(() =>{
    console.log('3')
    setTimeout(() => {
        console.log('2')
        setTimeout(() => {
            console.log('1')
        },1000)
    },1000)
},1000)

//error first callback

fs.readFile('./Public/home.html', {encoding: 'utf-8'}, (err,data) => { // mostly for error handling
    if(err){
        console.error('Error')
        console.error(err)
    }else{
        console.error('Success')
        console.log(data)
    }
})
