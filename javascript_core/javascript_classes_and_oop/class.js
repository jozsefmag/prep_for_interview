//Class//

//Classes are a tempalte for creating objects. They encapsilate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics


class Person {
    name = null//property
    #energy = 100//private property
    constructor(name){
        this.name = name//constructor
    }

    walk(distance){
        this.energy -= distance * 0.5//methods
    }
}
const person = new Person ("Joe")

class Person1 {
    name = "John Dou"
    say (){
        console.log(`My name is ${this.name}`)
    }
}

const john = new Person1()
john.say()