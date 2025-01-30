const number = 4
const string = "Hello"
const symb = Symbol()
const boolean = true
const nullValue = null
const a = undefined
console.log(a)

//String//

//Text values
//Literals representation: 'Text', "Text"
//Contecrt to string: ""+23,string(23), toString()

const first = "Hello"
const second = "world"
let concatResult = first + " "+ second
let dollarSignresukt = `${first} ${second}`
console.log (concatResult)
console.log(dollarSignresukt)

//Number//

//Numerical values
//Integer and float literals: 1, -1.2, 1e2
//Conver to Number: + "123", Number("123"), parseInt(),parseFloat)

const num1 = 123
const num2 = 0b11

//Boolean//

//Logical entity
//true/false
//falsy values in JS: false, null, undefined, 0, Nan,"(emptystring)", ""(empty string)

const bigTrue = true
const bigFalse = false

//Undefined//

//vairables without any assingend value
//cosnt second = undefine

let third
const fourth = undefined
console.log(third)
console.log(fourth)

//Null//

//Pointer to a non existing or invalid object
//Type and value at the same type

const fifth = null
