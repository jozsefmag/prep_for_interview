//Object.assign()//

//This method copies all enumerable own properties form one or more source objects to a target object. It returns the modficed target object

//target - where the changes take place
//changes that is applied

const target = {
    a: 1,
    b:2
}

const source = {
    b: 4,
    c: 5
}

const returnedTarget = Object.assign(target, source)

console.log(target)
console.log(returnedTarget)

const john = {
    name: "John",
    knowJava: true,
    knowJS: false,
    codeJava(){
        console.log(`${this.name} is coding on java`)
    }
}

const jsCoder = {
    knowJS: true,
    codeJS(){
        console.log(`${this.name} is coding on JS`)
    }
}

Object.assign(john, jsCoder)

console.log(john)