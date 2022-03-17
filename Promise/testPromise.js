

// const promise = new Promise(function (resolve, reject) {

//     resolve(100);

//     reject(new Error('promise rejected'))
// })

// promise.then(function (data) {
//     console.log('resolved:', data)
// }, function (err) {
//     console.log('rejected:', err)
// })

function ajax(url) {
    return new Promise(function (resolve, reject) {
        var url1 = __dirname + url;
        console.log('地址:', url, url1)
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url1);
        xhr.responseType = 'json';
        xhr.onload = function () {
            console.log('状态：', this.status, '地址:', url)
            if (this.status === 200) {
                resolve(this.response)
            } else {
                reject(new Error(this.statusText))
            }
        };
        xhr.send();
    })
}

ajax('/user.json').then(function (data) {
    console.log('数据', data)
}, function (err) {
    console.log(err)
})
