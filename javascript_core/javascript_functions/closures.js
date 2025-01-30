//Closures//

//A closure is the combination of a function bundled together(enclosed) with references to it's surronding state (the lexical enviroment). In other words, a closure gives you acces to an outer function's scope from an inner fucntion. In JS closures are created every time a function is created, at function creation time

function makeFunction() {
    let a = 1

    //closure
    return function() {
        console.log("a is " + a)
    }
}

const func = makeFunction()
func()

function makeCounter() {
    let a = 0
    return function(){
        return a++
    }
}

const counter = makeCounter()

console.log(counter())
console.log(counter())
