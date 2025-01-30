//Tertnary (conditional) operator//

//The conditional (ternary) operator is the only Javascript operator that tkaes three operands: a condition followed by a question mark(?), then an expression to execute if the condition is truthy followed by a colon(:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement

const a = 10
const b = 5
const c = (a > b) ? a - b : a + b // is a bigger than a? if so than a-b else a+b
console.log(c)