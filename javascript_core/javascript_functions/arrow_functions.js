//Arrown Functions//

//Arrow function expressions
//An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations

//Arrow functions don't have their own bidings to this, arguments or super, and should not be used as methods
//Arrow functions don't have acces to the new.target keyword
//Arrow functions aren't suitable for call, apply and bind methods
//Arrow functions cannot be used as constructors
//Arrow functions cannot use yield

//Function expression

const sumExpression = function (a,b){
    return a + b
}

//Arrow function
const sumArrow = (a, b) => {
    return a + b
}

console.log(sumArrow(2,5))

//Arrow function with implicit return and without parameters
const sum = (a, b) => a + b
console.log(sum(5,6))

const sayHello = () => console.log("Hello")
sayHello()