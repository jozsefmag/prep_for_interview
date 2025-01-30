//Async function//

//An async function is a function declared with with the async keyword, and the await keyword is permitted within it. The async and await keywords enable asynchronous, promise-based behaviour to be written in a cleaner style, avoiding the need to explicitly configure promise chains

//Async functions may also be defined as expressions
const fs = require ("fs").promises

async function perfomFileReading() {
    const data = await fs.readFile("./file.txt", "utf-8")
    console.log(data)
}

perfomFileReading()

//Handling rejected state
//it can be done using try...catch operator

async function performFileReading1() {
    try{
        const data = await fs.readFile('./file.txt', "utf-8")
        console.log(data)
    }
    catch (err){
        console.log(err)
    }
}

performFileReading1()

//async/await is a more recent syntax in JavaScript that allows you to write asyncrhronous code in a way that looks and behaves more like synchronous code. This can make your code cleaner and easier to understand.

//Let's modify the previous example of chaining promises to use asnyc/await

function firstAsyncOperation(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log("First operation completed")
            resolve(10)
        },2000)
    })
}

function secondAsyncOperation(number){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Second operation completed")
            resolve(number*2)
        },1000)
    })
}

function thirdOperation(){
    return new Promise (resolve =>{
        setTimeout(() =>{
            resolve(["data1", "data2", "data3"])
        },500)
    })
}
// async function to handle the operations
async function handleOperations() {
    try{
        const firstResult = await firstAsyncOperation()// Wait for the first operation to complete
        const finalResult = await secondAsyncOperation(firstResult)// Wait for the second operation to complete adn taking the first operation's result
        const thirdResult = await thirdOperation()
        console.log("Final result:", finalResult)
        console.log("Also here are some datas", thirdResult)
    } catch (error){
        console.error("And error occured",error)
    }
}

handleOperations()