const p1 = Promise.resolve('Hello');
const p2 = Promise.reject('World');
const p3 = Promise.resolve('!');

Promise.all([p1, p2, p3])
.then((results) => {
    console.log(results);
})
.catch((err) => {console.log(err)});    