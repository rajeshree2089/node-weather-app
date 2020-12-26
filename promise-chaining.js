const add = (a, b) => {
    return new Promise((resolve, reject) => {
        resolve(a + b);
    })
}

const doWork = async () => {
  const sum = await add(4,5);
 return sum;
}

doWork().then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})

