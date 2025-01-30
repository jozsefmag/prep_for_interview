//for statement//

//the for statement creates a loop that consists of three optional expressions, enclosed in parantheses and separated by semicolons (;), followed by a statement (usually a block statement) to be executed in the loop

for (let i = 0; i < 8; i++){
    console.log("first loop " + i)
}

for (let i = 0; i < 8; i++){
    if(i == 6){
        break
    }
    console.log("break loop "+i)
}

for (let i = 0; i < 8; i++){
    if (i == 6){
        continue
    }
    console.log("continue loop "+i)
}

const arr = [14,65,7,34,53]
const arr2 =[]
let sumArr = 0
for (let i = 0; i < arr.length; i++){
    if(arr[i] >= 34){
        arr2.push(arr[i])
    }
}
console.log(arr2)

for (let i = 0; i < arr2.length; i++){
    sumArr += arr2[i]
}

console.log(sumArr)

