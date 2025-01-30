//OOP//

//Object-oriented programming paradigm based on the cocept of "objects" which can contain data and code: data in the form of fields (attributes and properties), and code, in the form of the producers(ofthen know as methods)

//Inheritance// 
//Creation of a new class called a child entity based on parent entity's properties and methods
class NewAnimal{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    eat (){
        console.log(`${this.name} is eating`)
    }

    sleep(){
        console.log(`${this.name} is sleeping`)
    }

    makeSound(){
        console.log(`${this.name} makes a sound`)
    }
}
//Derived class (Child class) that inherits from Animal
class NewDog extends NewAnimal{
    constructor(name, age, breed){
        // Call the parent class's constructor
        super(name,age)
        //and a dog specific constructor
        this.breed = breed
    }
    //method specific to the dog
    fetch (){
        console.log(`${this.name} is fetching`)
    }
    //overriding the makeSound method
    makeSound(){
        console.log(`${this.name} says woof!`)
    }
}

class NewCat extends NewAnimal {
    constructor(name, age, color) {
        // Call the parent class's constructor
        super(name, age);
        this.color = color;
    }
  
    // Method specific to Cat class
    scratch() {
        console.log(`${this.name} is scratching.`);
    }
  
    // Overriding the makeSound method
    makeSound() {
        console.log(`${this.name} says Meow!`);
    }
}

const myDog1 = new NewDog("Buddy", 5, "Golden Reriever")
const myCat1 = new NewCat("Whiskers", 3, "Tabby")

myDog1.eat()
myDog1.sleep()
myDog1.makeSound()
myDog1.fetch()

myCat1.eat()
myCat1.sleep()
myCat1.makeSound()
myCat1.scratch()

//Polymorphism//
//It allows objects of differenet classes to be treated as objects of a common superclass. It also allows methods to do different things based on the object it is acting upon
//It is achieved through method overriding and iterfaces

//Base class
class Animal{
    constructor(name){
        this.name = name
    }
    //This will be overridden in the name of Polymorphism in derived classes
    makeSound(){
        console.log("Some generic animal sound")
    }
}

//derived classes
class Dog extends Animal{
    makeSound(){
        console.log("woof!")
    }
}

class Cat extends Animal {
    makeSound(){
        console.log("meow!")
    }
}

class Cow extends Animal {
    makeSound() {
        console.log("Moo! Moo!");
    }
  }

function animalSound(animal){
    animal.makeSound()
}

const myDog = new Dog("Buddy")
const myCat = new Cat ("Whiskers")
const myCow = new Cow ("Bessie")

animalSound(myDog)
animalSound(myCat)
animalSound(myCow)

//Encapsulation//
//Bundling the data(attributes) and methods(functions) that operate on the data, into a single unit or class and restricting acces some of the objects components
//It is achived by using private fileds and methods, along public methods. It is doable with "#" syntax

class Person{
    //Private fields
    #firstName
    #lastName
    #age

    constructor(firstName,lastName,age){
        this.#firstName = firstName
        this.#lastName = lastName
        this.#age = age
    }
    //Public methods
    getFullName(){
        return `${this.#firstName} ${this.#lastName}`
    }
    getAge(){
        return this.#age
    }
    setAge (newAge){
        if (newAge > 0 && newAge < 120){
            this.#age = newAge
        } else {
            console.log("Please enter a valid age between 1 and 119")
        }
    }
}
const person = new Person("John", "Doe", 30)

// Accessing public methods
console.log(person.getFullName()); // Output: John Doe
console.log(person.getAge());      // Output: 30

// Modifying the age with validation
person.setAge(35);
console.log(person.getAge());      // Output: 35

// Attempt to set an invalid age
person.setAge(150);                // Output: Please enter a valid age between 1 and 119.
console.log(person.getAge());      // Output: 35
// Attempting to access private fields directly will result in an error
//console.log(person.#firstName); // SyntaxError: Private field '#firstName' must be declared in an enclosing class



//Abstraction//
//Hidinng complex implementation details and showing only the necessary feature of an object 
//Following this principle we can build a system to handle different kinds of vehicles such as Car and a Bike

class Vehicle{
    constructor(make, model, year){
        if(this.constructor === Vehicle){
            throw new Error ( "Cannot instantiate abstract class")
        }
        this.make = make
        this.model = model
        this.year = year
    }

    startEngine() {
        throw new Error("Method 'startEngine()' must be implemented.");
    }//if no startEngine method, than this error will be thrown
  
    stopEngine() {
        throw new Error("Method 'stopEngine()' must be implemented.");
    }
  
    displayInfo() {
        console.log(`${this.year} ${this.make} ${this.model}`);
    }
}

class Car extends Vehicle{
    startEngine(){
        console.log("Car engine started")
    }
    stopEngine(){
        console.log("Car engine stopped")
    }
}

class Bike extends Vehicle{
    startEngine(){
        console.log("Bike engine started")
    }
    stopEngine(){
        console.log("Bike engine stopped")
    }
}

const myCar = new Car ("Toyota", "Corolla", 2020)
myCar.displayInfo()// Output: 2020 Toyota Corolla
myCar.startEngine()// Output: Car engine started
myCar.stopEngine()// Output: Car engine stopped

const myBike = new Bike("Harley Davidson", "Street 750", 2021)
myBike.displayInfo()// Output: 2021 Harley Davidson Street 750
myBike.startEngine()// Output: Bike engine started
myBike.startEngine()// Output: Bike engine stopped