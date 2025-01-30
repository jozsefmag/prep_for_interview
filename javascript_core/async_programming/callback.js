//Callback//

//Simple definition//
//A callback is a function that is to be executed after anoter function has finished executing - hence the name "call back"

//Complex definition//
//In JS, functions are objects. Because of this, functions can take functions as arguments, and can be returned by other functions. Functions that do this are called higher-order functions. Any function that is passed as an argument is called a callback function.

const fs = require ("fs")

fs.readFile("file.txt", "utf-8" ,handleResult)//path to the file, encoding, callback function that handels the data

//Error first callback pattern
function handleResult(err,data){//error may occur,data that is recieved from a file
    if (err) throw err
    console.log(data)
}

//Callback hell//
//Callback hell, also known as "Pyramid of Doom" refers to a situation in JS wheremultiple nested callback become difficult to understand, manage, and maintain