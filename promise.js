const doWork = new Promise((resolve, reject) => {
    setTimeout((error, response) => {
       // resolve("This issue is resolved");
        reject(undefined);

    },2000)
})

doWork.then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
})