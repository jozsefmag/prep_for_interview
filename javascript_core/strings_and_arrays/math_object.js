//Math Object//

//Math//
//built-in object, that has properties and methods for mathematical constants and functions. It's not a function object. Math works with the Number type

//Math.round()//
//The Math.round() statinc method returns the value of a number rounded ot the nearest integer

let number1 = 5.49
let rounded1 = Math.round(number1)

let number2 = 5.5
let rounded2 = Math.round(number2)

let number3 = -5.5
let rounded3 = Math.round(number3)

console.log(rounded1)
console.log(rounded2)
console.log(rounded3)

//Math.floor()//
//Rounds down to nearest int
let num1 = 3.95
let floored1 = Math.floor(num1)

let num2 = 4.75
let floored2 = Math.floor(num2)

console.log(floored1)
console.log(floored2)

//Math.ceil()//
//Always round up to nearest int

let ceilNumber1 = 2.3
let ceiled1 = Math.ceil(ceilNumber1)

let ceilNumber2 = 5.8
let ceiled2 = Math.ceil(ceilNumber2)

console.log("ceiled ",ceiled1)
console.log("ceiled ",ceiled2)

//Math.random()//
//Returns a flaoting-point, pseudo-random number that is greater or equal to 0 and less than 1
//Altough it can be csaled to desired range

function getRandomNumber(max){
    return Math.round(Math.random()* max)//The 0-1 number is multiplied by the given parameter number and it is rounded to the closest int
}

console.log(getRandomNumber(100))