//Constructor//

//In JS a constructor is a special method within a class that is called when a new instance of the class is created. The purpose of the constructor is to initialize the newly created object by assigning values to its properties or executing any setup logic. It runs at the time of instantiation before the nw object is returned to the caller. Only one consturctor method can be used in a class, and if not explicitly defined, a default constructor is used

class Car {
    constructor(brand, model, year){
        this.brand = brand  // Property to store the brand of the car
        this.model = model // Property to store the model of the car
        this.year = year // Property to store the year the car was made
    }

    displayDescription(){
        console.log(`This is a ${this.year} ${this.model} ${this.brand} `)
    }

    calculateAge(currentYear){
        return currentYear - this.year
    }
}

// Create an instance of the Car class
const myCar = new Car ("Tesla", "Model S", 2018)

myCar.displayDescription()

const carAge = myCar.calculateAge(2024)//in a variable we call the instance of Car class and we give it the current year
console.log(`The car is ${carAge} years old.`)//we consle log out the variable