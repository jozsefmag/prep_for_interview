//String//

//It is a special object that is used to store and manipulate sequence of character

const simpleString = "I am a string"
const simpleString2 = "I am a string too"
const templateString = `I am a template string ${simpleString}`

//Length property//

// The length data property of a String value contains the length of the string in UTF-16 code units

const simpleString3 = "I am a string aswell"
console.log(simpleString3.length)

//charAt//

//The String object's charAt() method returns a new string consisting of the single utf-16 code unit located at the specified offset into the string

const sentence = "The quick brown fox jumps over the lazy dog."
const index = 4

console.log(`The character at index ${index} is ${sentence.charAt(index)}`)

const str = "My first string"
console.log(str[0])