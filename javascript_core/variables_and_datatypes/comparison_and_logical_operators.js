//Comparison Operators//

const num1 = 5
const num2 = 6
const num3 = 7
const num4 = "7"

console.log(num1 > num2); // false
console.log(num1 < num2); // true
console.log(num1 == num2); // false
console.log(num3 == num4); // true --> different data type same value, not strict equal
console.log(num3 === num4); // false --> strict equal

//Binary Logical Operators//

//Logical operators are used to dermine the logic between variables or values

const a = true
const b = false

console.log(a || b) // || = or --> true
console.log( a && b) // && = and --> one of the is true so it's false

//The typeOf Operator//

//The typeOf oeperator returns the type of a variable, object, function or expression

console.log(typeof "John"); // Output: string
console.log(typeof 3.14); // Output: number
console.log(typeof NaN); // Output: number
console.log(typeof false); // Output: boolean
console.log(typeof [1, 2, 3, 4]); // Output: object
console.log(typeof {name:'John', age:34}); // Output: object
console.log(typeof new Date()); // Output: object
console.log(typeof function() {}); // Output: function
console.log(typeof myCar); // Output: undefined
console.log(typeof null); // Output: object