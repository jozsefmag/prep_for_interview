//Popular methods//

//join()//
//Creates and returns a new string by concatenating all of the elements in an array

let joinArr = ["Hello", "World!"]
let joinResult = joinArr.join(" ")//Hello and World elements are joined by a whitespace between them

console.log(joinResult)

//includes()//
//Determines if an array includes a certain value or not inside of it, retruning true or false

let includesArr = ["Hello", "World!"]
let includesStr = "Hello, World"//it workes with str data types

let includesResult = includesStr.includes("World")
let includesResult1 = includesStr.includes("World")

console.log(includesResult)
console.log(includesResult1)

//indexOf()//
//given element where can be found in the array in first occurance
//if not present it's -1

let indexOfArr = ["Hello", "World!"]
let indexOfresult = indexOfArr.indexOf("World!")

console.log(indexOfresult)

const animals = ["ant", "bison", "camel", "duck", "bison"]

console.log(animals.indexOf("bison"))
console.log(animals.indexOf("bison", 2))//start the search from index 2

//push()//
//adds one more element to the end of an array

let pushArr = ["Hello", "World!"]
pushArr.push("How","are","you")

console.log(pushArr)

//pop()//
//removes the last element of an array

let popArr = ["Hello", "World!", "How", "are", "you?"]
let poppedElement = popArr.pop()//get the popped element

console.log(poppedElement)
console.log(popArr)

//unshift()//
//adds one more element to the beggining of an array

let unshiftArr = ["World!", "How", "are", "you?"]
unshiftArr.unshift("Hello")

console.log(unshiftArr)

//shift()//
//removes the first element from an array

let shiftArr = ["Hello", "World!", "How", "are", "you?"]
let shiftedElement = shiftArr.shift()// get the shifted element

console.log(shiftedElement)
console.log(shiftArr)

//forEach()//
//executes a provided function once for each array element

let forEachArr = ["Hello", "World!", "How", "are", "you?"]

forEachArr.forEach(function(element,index){//first parameter is always for the parameter, second is always for index, third is the rate the method was called for
    console.log(index,element)
})

let numArray = [2,-54,67,-4,-70,23]

numArray.forEach(function(element){
    if(element >= 0){
        console.log(`${element} is positive`)
    } else{
        console.log(`${element} is not positive`)
    }
})

//slice()//
//returns a shallow copy of a portion of an array into a new array object selected from start to end by starting and ending index numbers

let sliceArr= ["Hello", "World!", "How", "are", "you?"]
let slicedArr = sliceArr.slice(1,3)//from 1st to 3rd, but the 3rd one is not included

let sliceArr1 = ["Hello", "World!", "How", "are", "you?"]
let slicedArr1 = sliceArr1.slice(2)//from the 2nd until the end

console.log(slicedArr)
console.log(slicedArr1)

//splice()//
//removing or replacing exinsting elements and adding new

let splicedArr = ["Hello", "World!", "How", "are", "you?"]
let removed = splicedArr.splice(1,2,"there")//at index 1 remove 2 elements

console.log(removed)//removed elements
console.log(splicedArr)

let splicedArr1 = ["Hello", "World!", "How", "are", "you?"]
let removed1 = splicedArr1.splice(2)

console.log(removed1)//removed elements
console.log(splicedArr1)

const spliceAnimals =  ["ant", "bison", "elephant"]
const camel = "camel"
const cat = "cat"
//spliceAnimals.splice(1,0,camel) //with 0 we add but not delete
spliceAnimals.splice(1,1,camel) //with 0 we add we delete 1 at index 1
console.log(spliceAnimals)
console

//reverse()//
//reverses an array

let reverseArr = ["Hello", "World!", "How", "are", "you?"]
reverseArr.reverse()
console.log(reverseArr)

//sort()//
//sorts an array's element from highest to lovest A->Z

let sortArr = ["Banana", "Apple", "Cherry", "Date"]
sortArr.sort()

console.log(sortArr)

let sortArr1 = [40, 100, 1, 5, 25, 10];
sortArr1.sort(function(a, b) {
  return b - a;//reverse sorting
});
console.log(sortArr1);

//map()//
//creates a new array populated with the results of calling a provided function on every element in the calling array

let mapArr = [1, 2, 3, 4, 5]
let newArr = mapArr.map(function(num){
    return num *2
})

console.log(newArr)

//every()//
//test if all elements in the array pass the test implemented by the provided function
//it returns a boolean value

let everyArr = [10,20,30,40,50]
let everyResult = everyArr.every(function(num){//num measn array elements
    return num >= 10 //numbers are bigger than 10?
})

console.log(everyResult)

//filter()//
//shallow copy of a porton of a given array filtered down to just the elements from the given array that pass the test implemented by the provided function

let filterArr = [1, 2, 3, 4, 5, 6]

let filterNewArr = filterArr.filter(num => num % 2 === 0)
console.log(filterNewArr)

//find()//
//Returns the first element in the provided array that satisfies the provided testing function

let findArr = [1, 2, 3, 4, 5, 6]
let found = findArr.find(num => num > 3)//the first elemenet that is bigger than 3 is 4

console.log(found)

//some()//
//Tests whether at least one element in the array passes the test implemented by the provided function
let someArr = [1, 2, 3, 4, 5, 6]
let some = findArr.some(num => num > 3)//is there an element that is bigger than 3

console.log(some)

//reduce()//
//executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element

let reduceArr = [1, 2, 3, 4, 5];
let sum = reduceArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum)