//Default parameters//

//Default function parameters allow named paraters to be initialized with default values if no value or "undefined" is passed

//Example
function logDefaultParameters(name, age = 23){
    console.log(name,age)
}//it's basiclay about we give values to the parameters right at the start of the function

logDefaultParameters("John")

function sum (a = 0, b = 0){
    console.log("a is: ", a)
    console.log("b is: ", b)
    return a + b
}

console.log("The result is ", sum(2, 5))//we can overwirte the original parameter values