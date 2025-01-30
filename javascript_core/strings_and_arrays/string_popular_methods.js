//Popular methods//

//slice()//
//This method extracts a section of a string and returns it as a new string

let sliceStr = "My new string"
console.log(sliceStr.slice(7))//Starts rom index 7 and continues
console.log(sliceStr.slice(0,3))

//trim()//
//Removes whitespace from both ends of a string and returns a new string. Whitespaces: space, tab, no-break, etc.

let trimStr = " string   "
console.log(trimStr.trim())

//toUpperCase()//
//Convert the sting into uppercase. The calue will be converted to a string if it's not one

let upperStr = "i wanna be uppercase!"
console.log(upperStr.toUpperCase())

//toLowerCase()//
//Convert the sting into lowercase. The calue will be converted to a string if it's not one

let lowerStr = "I AM YELLING"
console.log(lowerStr.toLowerCase())

//slice()//
//Takes a string and turn it into and oredered list, by dividing each letter into elements
//This method works by a pattern, where we give the seperator

let splitStr = "Hello"
let result = splitStr.split("")//no sperataror needed, Hello is a whole word
console.log(result)

const stringOfNames = "John,Ann,Jack,Ray,Bob"
const arrayOfNames = stringOfNames.split(",")//the separator is ",". It will divide the string where "," is apparent
console.log(arrayOfNames)

//match()//
//Retrieves the result of matching a string agaisnt a regular expression

const matchStr = "cost is $2345.87"
const costMatch = matchStr.match(/\$([\d\.]+)/)//betwen // we add the search parameter
const cost = costMatch[1]
console.log(costMatch)
console.log(cost)

//let's find the apparenace the "is" string in matchStr2
const matchStr2 = "This IS my Test String"

const re = /is/ //betwen // we add the search parameter
const re1 = /is/g // with the added "g" flag the entire string will be searched and print out the first match
const re2 = /is/gi //with the extra "i" flag the search will be insensitive and ignore upper or lower case paramater wording
console.log(matchStr2.match(re).length)// the length is for how many appareances

//replace()//
//Returns a new string wit one, some or all matches of pattern
//The pattern can be string or a RegExp
//The replacement can be a string or a function caled for each match

const simpleStr = "I am a string"
const replacedString = simpleStr.replace("I am", "You are")
const replacedStringRegexp = simpleStr.replace(/(I\sam)/, "You are")

console.log(replacedString)
console.log(replacedStringRegexp)

const str = "JAVA JS .NET JS java"

console.log(str.replace("JAVA","JS"))//it only cahnges the first JAVA. If we want to cahnge all of it we need RegEx
console.log(str.replace(/JAVA/gi,"JS"))//"g" and "i" flag so it search the whole scope of the string and change it in all cases