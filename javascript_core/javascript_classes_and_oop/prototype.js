//Prototype//

//Prototypes are the mechanism by which js objects inherit features from one another


//setPrototypeOf()//
// The Object.setPrototypeOf() method set the prototype of a specified object to another object or null

const person = {
    energy:100,
    walk(distance){
        this.energy -= distance * 0.5
        console.log(this.energy)
    }
}

const developer = {
    code (lines){
        this.energy -= lines * 0.1
        console.log(this.energy)
    }
}

Object.setPrototypeOf(developer,person) //Setting prototype. Object Developer will get access to all methods and properties of object Person
developer.code(100)
developer.walk(50)

