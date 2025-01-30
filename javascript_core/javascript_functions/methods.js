//Methods//

//It is a shorthand for a function assigned to the method's name

const person = {
    firstName: "John",
    lastName: "Doe",
    say(){
        console.log(`Hello ${this.firstName}`)
    }
}

person.say()