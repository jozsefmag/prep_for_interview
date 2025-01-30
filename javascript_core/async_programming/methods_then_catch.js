//Methods: then() and catch()//

//then()//
//retruns a Promise. Takes 2 arguments: callback functions for the succes and failure cases if not


//catch//
//returns a Promise and deals with rejected cases only

// Example: A promise that will be rejected or resolved depending on a parameter

function myPromise(param){
    return new Promise((resolve, reject)=>{
        if (param){
            resolve("Promise resolved")
        } else {
            reject("Promise rejected")
        }
    })
}

myPromise(true)
    .then((data)=>{
        console.log(data)
    })//Promise resolved

myPromise(false)
    .catch((data)=>{
        console.log(data)
})//Promise rejected

const fs = require ("fs/promises") 

const rejectedPromise = fs.readFile("file3.txt", "utf-8")//tries to find a file that doesnt exist
rejectedPromise
    .then(data =>{
        console.log(data)
    })
    .catch(err => {//because no file exist, catch method is initiated
        console.log(err)//no such file or directory error
    })