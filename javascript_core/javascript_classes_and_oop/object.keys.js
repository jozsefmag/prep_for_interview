//Object.keys()//

//This method returns an array of a given object's own enumerable property names, iterated in the same order that a normal would

const options = {
    width: 1024,
    height: 1024,
    name: "test"
}

console.log(Object.keys(options))// ['width', 'height', 'name']