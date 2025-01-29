//Function i js is a reusable block of code designed to perform a specific task

//Function declaration

function greet(){
    console.log("Hello there!")
}

greet ()

//Function with parametes
function param(name){
    console.log(`Hello ${name}`)
}
//Joe is an argument here
param("Joe!")



//Arrow function
let add = (a,b) => {
    return a + b
}
console.log(add(2,3))

//Function expression
//Function assigned to a variable
const hellYeah = function(callWord){
    if(callWord === "america" || callWord=== "guns"|| callWord === "beer"){
        return "Heeeelll yeah brudder"
    } else {
        return "I knew you were a liberal"
    }
}

console.log(hellYeah("woman rights"))




//Anonymous function
let anonymous_function = function () {
    console.log("I am.....");
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("ANONYMOUS");
            resolve("ANONYMOUS completed");
        }, 1000);
    });
};

// Constructor Function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person = new Person("Dana", 30);
console.log(person.name);

// Async Function
async function main() {
    const anonym = await anonymous_function(); 
    const person = new Person("Joe", 30); 
    console.log(person, anonym); 
}

main()