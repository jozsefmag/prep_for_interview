//Promise.allSettled()//

//It is usefull for when you want to wait for all promises to settle,regardless of whether they have been fulfilled or rejected. This will returns a promise that resolves after all the given promises have resolved or rejected

function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 1, name: "John Doe" });
        }, 1000);
    });
  }
  
function processImage() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Image processing failed"));
        }, 2000);
    });
}
  
function queryDatabase() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["data1", "data2", "data3"]);
        }, 500);
    });
}

Promise.allSettled([fetchUserData(), processImage(), queryDatabase()])
    .then(results =>{
        results.forEach((result, index) => {
            if (result.status === "fulfilled"){
                console.log(`Promise ${index + 1} fulfullied with value:`, result.value)
            } else {
                console.log(`Promise ${index + 1} rejected with reason:`, result.reason)
            }
        })
    })

// Promise 1 fulfilled with value: { id: 1, name: 'John Doe' }
// Promise 2 rejected with reason: Error: Image processing failed
// Promise 3 fulfilled with value: [ 'data1', 'data2', 'data3' ]