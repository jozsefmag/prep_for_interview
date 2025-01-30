//IIFE (Immediatley Invoked Function Expression)//

//An IIFE is a JS function that runs as soon as it is defined

//Example

(function (){
    console.log("Hello World!")
})()//doesn't need to be called it is done by here with ()

//Example of IIFE with parameters

const myFunc = (function (name){
    return "Hello " + name
})("Joey!")

console.log(myFunc)

