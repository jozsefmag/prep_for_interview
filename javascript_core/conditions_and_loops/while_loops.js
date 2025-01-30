//While//

//The wihle statement creates a loop that executes a  specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement

let num = 50
while (num < 55){
    console.log(num)
    num++
}

let sum = 0
let i = 0

while (i < 5){
    i++
    sum += i
}

console.log(sum)


//Do..while//

//The do..while statement creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executin at least once

let num1 = 50

do {
    console.log(num1)
    num1++
} while (num1 < 45)

do {
    i++
    sum += i
} while(i < 5)

console.log(sum)
