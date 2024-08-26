/*
    Promise: Promises is an object which is used to represent an eventual 
    completion or failure of an asynchronous operations.

    There are 3 states of promises:
    1.Pending 
    2.Fulfilled
    3.Rejected
*/

// creating promises

const promiseOne = new Promise(function(resolve,reject){
    // Any async task
    setTimeout(() => {
        console.log("Async task completed")
        resolve("Hello, Promise!");
    }, 2000);
})
// promise ko consume
promiseOne.then((message) => {
    console.log(message);
})

// creating another promise

const promiseTwo = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve({
            username:"adi",
            email: "adi@example.com"
        })
    }, 1000)
})

promiseTwo.then((user) => {
    console.log(user);
})


// creating 3rd promise

const promiseThree = new Promise(function(resolve, reject){

    setTimeout( ()=>{
        let error = false;
        if(!error){
            resolve({
                username:"adi",
                password:"123"
            })
        }
        else{
            reject("An error occurred")
        }
        
    },1000)
})
// .then chaining
promiseThree.then((user) => {
    console.log(user);
    return user.password
}).then((pass)=>{
    console.log(pass);
}).catch((err)=>{
    console.log(err);
})

// using async-await 

const promiseFour = new Promise(function(resolve, reject){

    setTimeout( ()=>{
        let error = false;
        if(!error){
            resolve({
                username:"js",
                password:"123"
            })
        }
        else{
            reject("An error occurred")
        }
        
    },1000)
})
async function user(){
    try{
        const user = await promiseFour;
        console.log(user);
    }
    catch(err){
        console.log(err);
    }
}
user();