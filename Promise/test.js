let fs = require('fs')
//  绝对路径   __dirname

// fs.readFile('./data/index.txt', (err, data) => {
//     console.log('index=', data.toString());
//     fs.readFile('./data/name.txt', (err, data) => {
//         console.log('name=', data.toString());
//         fs.readFile('./data/age.txt', (err, data) => {
//             console.log('age=', data.toString());
//         });
//     });
// });
let Promise = require('./myPromise');

let p = new Promise((resolve, reject) => {
    fs.readFile('./data/index.txt', (err, data) => {
        //console.log(data.toString());
        resolve(data.toString())
        //reject("error");
    });
})
// p.then(data => {
//     console.log(1, data)
// })

let p1 = p.then(data => {
    console.log(19, data);
    return (new Promise((resolve, reject) => {
        fs.readFile('./data/name.txt', (err, data) => {
            //console.log(data.toString());
            resolve(data.toString())
        });
    }))

}, err => {
    console.log(err)
})
let p2 = p1.then(data => {
    console.log(2, data);
    return (new Promise((resolve, reject) => {
        fs.readFile('./data/age.txt', (err, data) => {
            //console.log(3, data.toString());
            resolve(data.toString())
        });
    }))
})

p2.then(data => {
    console.log(3, data)
})



