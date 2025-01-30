//Promise//
//A proxy for a value not necessarily known when the promise is created. It allows to associate with handlers with an asynchronous action's eventual succes value or failure reason. This lets asyncrhonous methods return values like syncrhonous methods: instead of immediatley returning the final value, the asynchronous method returns a promise to supply the value at some point in the future

/* const readPromise = readFile("./file.txt","utf-8")//call of function that returns promise object

readPromise
.then(data => {
    console.log(data)//then - succes callback
})
.catch(err => {
    throw err//catch - failure callback
} ) */

// Example: How to create a promise
function promiseToResolve(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("I resolved")
        },1000)
    })
}

//then - this is how we handle resolve
promiseToResolve()
    .then((result)=>{
        console.log(result)//I resolved!
})

// Example: How to create a promise that will be rejected
function promiseToReject(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject("I rejected")
        },1000)
    })
}

//catch - this is how we handle the reject
promiseToReject()
    .catch((error)=>{
        console.log(error)//I rejected
})
