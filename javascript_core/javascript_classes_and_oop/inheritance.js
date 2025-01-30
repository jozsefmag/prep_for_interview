//Inheritance//

//To create a class inheritance, we need the extends keyword. A class created with a class inheritance inherits all the methods from another class

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

class Developer extends Person {
    lang = null
    constructor(name,lang){
        super(name)//superclass constructor
        this.lang = lang
    }

    code(lines){
        console.log(`${this.name} codes on ${this.lang}`)
        this.energy -= lines * 0.1
    }
}

const developer = new Developer ("Joe", "JS")
developer.walk(100)
developer.code(300)

//Parent Class
class Animal {
    constructor(name){
        this.name = name
    }
    
    makeSound(){
        console.log(`${this.name} makes a sound`)
    }

    eat(){
        console.log(`${this.name} is eating`)
    }
}
//Subcalss Dog extends on the Animal class
class Dog extends Animal {
    constructor(name, breed){
        super(name)//call the super class
        this.breed = breed
    }
    //Ovveride the makeSound method
    makeSound(){
        console.log(`${this.name} is fetching`)
    }
    //New method specific to Dog
    fetch(){
        console.log(`${this.name} is fetching`)
    }
}

const myDog = new Dog("Rex", "Golden Retriever")

myDog.makeSound()
myDog.eat()
myDog.fetch()

console.log(myDog instanceof Animal)// is myDog instance of Animal --> yes
console.log(myDog instanceof Dog)//is myDog instance of Dog--> yes