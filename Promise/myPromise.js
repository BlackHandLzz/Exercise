const SUCCESS = "fulfilled"
const FAILURE = "rejected"
const PENDING = "pending"

function resolvePromise(value, resolve, reject) {
    if (typeof value === "function" || typeof value === "object") {
        try {
            let then = value.then;
            if (typeof then === "function") {
                then.call(value, x => {
                    resolvePromise(x, resolve, reject);
                    // resolve(x)
                }, error => {
                    reject(error);
                })
            } else {
                resolve(value)
            }
        } catch (e) {
            reject(e)
        }
    } else {
        resolve(value); // 返回普通值
    }
}



class Promise {
    constructor(executor) {
        this.status = PENDING; // 初始状态等待中
        this.value = undefined; // 保留成功数据
        this.reason = undefined; // 保留失败数据
        this.onFulfilledCallbacks = []; // 保留成功回调
        this.onRejectedCallbacks = [];  // 保留失败回调
        let resolve = value => {
            // 1 修改状态 2 改变值 3 状态修改后不可再变(添加判断)
            if (this.status === PENDING) {
                this.status = SUCCESS;
                this.value = value;
                this.onFulfilledCallbacks.forEach(fn => fn())
            }
        };
        let reject = reason => {
            // 1 修改状态 2 改变值 3 状态修改后不可再变
            if (this.status === PENDING) {
                this.status = FAILURE;
                this.reason = reason;
                this.onRejectedCallbacks.forEach(fn => fn())
            }
        };
        try {
            executor(resolve, reject);
        } catch (e) {
            reject(e)
        }
    }
    then(onFulfilled, onRejected) {  // 成功回调   失败回调
        let p = new Promise((resolve, reject) => {
            //console.log(onFulfilled, onRejected);
            if (this.status = SUCCESS) {
                let v = onFulfilled(this.value);
                resolvePromise(v, resolve, reject);
            }
            if (this.status = FAILURE) {
                let v = onRejected(this.reason);
                resolvePromise(v, resolve, reject);
            }
            if (this.status = PENDING) {
                this.onFulfilledCallbacks.push(() => {
                    let v = onFulfilled(this.value);
                    resolvePromise(v, resolve, reject);
                })
                this.onRejectedCallbacks.push(() => {
                    let v = onRejected(this.reason);
                    resolvePromise(v, resolve, reject);
                })
            }
        })
        return p
    }
}

module.exports = Promise;