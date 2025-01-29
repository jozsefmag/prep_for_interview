//Global scope
//Any variable declared out side of a function or a block(using var, let or const)

var globalVar = "I am a global var"
let globalLet = "I am a global let"
const globalConst = "I am a global const"

function showGlobal() {
    console.log(globalVar)//Accessible here
    console.log(globalLet)//Accessible here
    console.log(globalConst)//Accessible here
}

console.log(globalVar)//Accessible here
console.log(globalLet)//Accessible here
console.log(globalConst)//Accessible here

showGlobal()