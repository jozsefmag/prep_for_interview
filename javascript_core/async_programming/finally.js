//finally()//

//Method of a Promise schedules a function, the callback function, to be called when the promise is settled. Like then() and catch(), it immiediatley retruns an equivalent Promise object, allowing to chain calls to another promise method, an operation called composition

// Example: A promise that will be rejected or resolved with usage of .finally()

function myPromise(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise resolved")
        }, 2000)
    })
}

myPromise()
    .then((data) => {
        console.log(data)
    })
    .finally(()=>{
        console.log("Promise is done")
    })//Promise resolved, Promise is done