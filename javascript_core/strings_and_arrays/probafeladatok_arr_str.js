function isPalindrome(str) {
    let split = str.split(""); 
    let palindromSplit = split.reverse()
    let joinArray = palindromSplit.join("")
    if (str === joinArray) { // Compare the joined strings
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false

function isValidEmail(email) {
    const validitation = email.includes("@")
    return validitation
}
console.log(isValidEmail("test@example.com")); // true
console.log(isValidEmail("testexample.com")); // false

const numArr = [2,17,68,-30,48,27,55,97]
let positiveArr = numArr.filter(num => num > 0 && num % 2 === 0)

let highest_Num = 0
for (i = 0; i < positiveArr.length; i++){
    if (positiveArr[i] > highest_Num) {
        highest_Num = positiveArr[i]
    }
}
console.log(highest_Num)

// Test: Filter all positive numbers
const numbers = [-10, 15, 30, -25, 50, -5]
let positiveNum = numbers.filter(num => num > 0)
console.log(positiveNum)


// Test: Square each number, then sum the squares
const nums = [2, 3, 4]
let square = nums.map(num => num**2)
let sumofSquare = square.reduce((accumulator, currentvalue) => accumulator + currentvalue, 0)
console.log(sumofSquare)

// Test: Filter even numbers, then find the product of the remaining numbers
const arr = [5, 2, 10, 3, 8]
let evenNums = arr.filter(num => num % 2 === 0)
let multiplyEven = evenNums.reduce ((accumulator, currentvalue) => accumulator * currentvalue, 1)
console.log(multiplyEven)

// Test: Convert names to uppercase and filter those starting with "A"
const names = ["Anna", "Mike", "Alice", "John", "Amanda"];
let upperCase = []
for (i = 0; i < names.length;i++){
    upperCase.push(names[i].toUpperCase())
}
let upperCaseWithA = upperCase.filter(str => str.startsWith("A"))


// Test: Calculate the average age of people over 18
const people = [
    { name: "John", age: 25 },
    { name: "Jane", age: 17 },
    { name: "Mike", age: 32 },
    { name: "Alice", age: 15 },
    { name: "Bob", age: 40 }
]

let peopleAge = people.map(num => num.age)
let ageOver18 = []
for (i = 0; i < peopleAge.length; i++){
    if (peopleAge[i] > 18){
        ageOver18.push(peopleAge[i])
    }
}
let avrageAge = ageOver18.reduce((accumulator, currentvalue) => accumulator + currentvalue/ageOver18.length,0)
console.log(avrageAge)

// Test: Remove duplicates and sort the array
const mixedNumbers = [5, 10, 5, 20, 15, 20, 10]

let mixedSet = new Set (mixedNumbers)
let uniqueArray = [...mixedSet]
let sortedArray = uniqueArray.sort((a,b) => a-b)
console.log(sortedArray)
