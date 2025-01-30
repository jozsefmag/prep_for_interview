//Promise.care()//

//This method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fullfills or rejects, with the value or reason from that promise

function fetchUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({id:1, name: "John Doe"})
        },1000)
    })
}

function processImage(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("image_process.png")
        },2000)
    })
}

function queryDatabase(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(["data1", "data2", "data3"])
        },500)// This promise will win the race because it resolves the fastest
    })
}

Promise.race([fetchUserData(), processImage(), queryDatabase()])
    .then(value => {
        console.log("The first promise settled with value:", value)
    })//The first promise settled with value: [ 'data1', 'data2', 'data3' ]
    .catch(reason => {
        console.log("The first promise settled with rejection", reason)
    })