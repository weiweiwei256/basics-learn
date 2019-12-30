console.log('load promise')
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

const isFunction = variable => typeof variable === 'function'
class MyPromise {
    constructor(handle) {
        if (!isFunction(handle)) {
            throw new Error('MyPromise must accept a function as a parameter')
        }
        // 添加状态
        this._status = PENDING
        // 添加状态
        this._value = undefined
        this._fulfilledQueues = []
        // 添加失败回调函数队列
        this._rejectedQueues = []
        // 执行handle
        try {
            handle(this._resolve.bind(this), this._reject.bind(this))
        } catch (err) {
            this._reject(err)
        }
    }
    // 添加resovle时执行的函数
    _resolve(val) {
        if (this._status !== PENDING) return
        this._status = FULFILLED
        this._value = val
    }
    // 添加reject时执行的函数
    _reject(err) {
        if (this._status !== PENDING) return
        this._status = REJECTED
        this._value = err
    }
}
