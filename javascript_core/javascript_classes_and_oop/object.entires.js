//Object.entries()//

//This method returns an array of a given object's own enumerable string-keyed property pairs. This is the same as iterating with a for...in loop, except that a for...in loop enumerates properties in the prototype chain as well

const person = {
    name: "Alice",
    age: 25,
    isStudent: true
}

const entries = Object.entries(person)
console.log(entries)

// [
//   ['name', 'Alice'],
//   ['age', 25],
//   ['isStudent', true]
// ]


entries.forEach(([key,value])=>{
    console.log(`${key}: ${value}`)
})

// Output:
// name: Alice
// age: 25
// isStudent: true