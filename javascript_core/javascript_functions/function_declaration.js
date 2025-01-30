//Function declaration//

//The fucntion declaration (function statement) defines a function with the specified parameters

//Hoisting function --> call te fucntion, before it is created
showMessage("Hello World!")
function showMessage(text){
    console.log(text)
}

//Example of how let is block scoped
let num = 10
function numberFunction (){
    let num = 1
    console.log(num)
}

numberFunction()
console.log(num)

//Example
function calc (a,b){
    return a + b
}

console.log(calc(2, 5))
console.log(calc(3, 2))

//Example
function returnValue(){
    let num = 50
    return num
}

let anotherNum = returnValue()
console.log(anotherNum)