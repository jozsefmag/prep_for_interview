//Javascript Objects//

//The object class is one of js data types. It is used to store various keyed collections and more complex entities.

const john = {
    name: "John",
    lastName:"yeah",
    age: 25,
    getOlder(){
        this.age ++
    } //method inside object
}

john.getOlder()
john.getOlder()

john.language = "JS"
delete john.lastName//deleting properties inside objects

console.log(john)
console.log(john.name)
console.log(john["age"])

