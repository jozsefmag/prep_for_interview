//Promises chaining//

//Promise chaining allows to perform a series of async operations in a sequenece, where each operation start once the previous one has completed. This allow us to avoid the nested structure of callback (callback hell) and instead write code that is more modular and easier to read

// A function that returns a promise which resolves after 2 seconds
function firstAsyncOperation(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("First operation completed")
            resolve(10)//resolve promise with some value
        },2000)
    })
}

// A function that returns a promise which resolves after 1 second
function secondAsyncOperation(number){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Second operation completed")
            resolve(number*2)//resolve with some multiplication
        },1000)
    })
}

//Chaining the two promises
firstAsyncOperation()// Call the first function which returns a promise
    .then(result=>{
        // Once the first promise resolves, the result can be used in the next promise the 10 will be number parameter
        return secondAsyncOperation(result)
    })
    // Handle the final result of the second promise.
    .then (finalResult => {
        console.log("Final result:", finalResult)
    })
    .catch(error => {
        console.log("An error occurred:", error)
    })