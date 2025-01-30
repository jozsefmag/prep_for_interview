//Throwing errors//

//Error objects are thrown when runtime rrors occur. The Error object can also be used as a base object for user-defined expections

function double(number){
    if(typeof number !== "number") throw new Error("This is not a number!")//if the type is not what we want throw an error massage
    return number *2
}

console.log(double("asd"))