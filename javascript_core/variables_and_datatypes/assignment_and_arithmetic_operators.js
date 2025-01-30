//Assignment operators//

//Assignment operators are used to assign values to JS variables

let a = 5
a += 5
console.log(a)

// Prefix Increment
let x = 5
let y = ++x; // x is incremented to 6, then y is assigned the value of x.
console.log(x); // Output: 6
console.log(y); // Output: 6

// Postfix Increment
let v = 5
let i = v++; // y is assigned the value of v (5), then i is incremented to 6.
console.log(v); // Output: 6
console.log(i); // Output: 5

//Arithmetic operators//

//Arithmetic operators are used to perform arithmetic between variables and/or values

console.log(2 + 3)
console.log(2 - 1)
console.log(2 * 5)

//String concatenation//

// the + operator, and the += operator can also be used to concatenate (add) strings

const firstName = "John"
const secondName = "Doe"
console.log("My name is " + firstName + " " + secondName)

const human = {firstName : "John"} 
human.lastName = "Dou"
human.fullName = human.firstName + " " + human.lastName

console.log(human.fullName)