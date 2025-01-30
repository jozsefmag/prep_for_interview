//Promise.all()//

const { error } = require("console")

//This method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises. This returned promise will resolve when all of the input's promises have resolved, or if the input iterable contains no promises. It rejects immediately if input promises rejects or non-promises throw an error

// Simulate a fetch call to get user data
function fetchUserData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({id:1, name:"John Doe"})//simulated user data
        },1000)
    })
}

// Simulate image processing task
function processImage(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("image_processed.png")// Simulated image processing result
        },2000)
    })
}

// Simulate a database query
function queryData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(["data1", "data2", "data3"])
        }, 500)
    })
}

//Use Promise.all to handle all thre promises
Promise.all([fetchUserData(), processImage(), queryData()])
    .then(results =>{
        // results is an array of the resolved values from each promise
        const userData = results[0]
        const imageResult = results[1]
        const databaseResult = results[2]

        console.log("User data:", userData)
        console.log("Image result:", imageResult)
        console.log("Database data:", databaseResult)
    })
    .catch(error => {
         // If any of the promises fail, this catch block will execute
         console.log("And error occurred:", error)
    })