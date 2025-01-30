//for...in//

//The for...in statement iterates over all enumeable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties

const person = {
    firstName: "John",
    lastName: "Dou",
    age:30
}

for (let key in person){
    console.log(key,person[key])//the key and object key that hold the value
}

//for...of//

//The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects(e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object

const arrayOfNumber = [1,2,3,4,5]
let sum = 0
for (let i of arrayOfNumber){
    sum += i
}
console.log(sum)