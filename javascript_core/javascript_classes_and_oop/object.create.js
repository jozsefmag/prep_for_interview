//Object.create()//

//This method creates a new object, using an existing object as the prototype of the newly created object

const options = {
    width: 1024,
    height: 1024,
    name: "test"
}

const optionsSecond = Object.create(options)
optionsSecond.width = 1200
console.log(optionsSecond.width)//new object with the new width value from options object
console.log(options)