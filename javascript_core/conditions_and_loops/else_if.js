//else if//

//Multiple if...else statement can be nested to create an "else if" clause. Note that there is no elseif(in one word) keyword in JavaScript

let num = 50

if (num < 49){
    console.log("Wrong!")
} else if (num > 100){
    console.log("Too much")
} else {
    console.log("That's right!")
}

/**
 * 18-25 -> 18%
 * 26-40 -> 20%
 * 41-99 -> 30%
 */

const age = 30

if (age >= 18 && age <= 25){
    console.log("18%")
} else if (age >= 26 && age <= 40){
    console.log("20%")
} else if (age >= 41 && age <= 99){
    console.log("30%")
} else {
    console.log("Age too low or too high")
}