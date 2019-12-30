// 创建一个Mvvm构造函数
// 这里用es6方法将options赋一个初始值，防止没传，等同于options || {}
function Mvvm(options = {}) {
    // vm.$options Vue上是将所有属性挂载到上面
    // 所以我们也同样实现,将所有属性挂载到了$options
    this.$options = options
    // this._data 这里也和Vue一样
    let data = (this._data = this.$options.data)
    // 数据劫持
    observe(data)
    // 数据代理就是让我们每次拿data里的数据时，不用每次都写一长串，如mvvm._data.a.b这种，我们其实可以直接写成mvvm.a.b这种显而易见的方式
    for (let key in data) {
        Object.defineProperty(this, key, {
            configurable: true,
            get() {
                return this._data[key] // 如this.a = {b: 1}
            },
            set(newVal) {
                this._data[key] = newVal
            },
        })
    }
    // 编译
    new Compile(options.el, this)
}

// 创建Compile构造函数  将html中的所有表达式换成实际的值
function Compile(el, vm) {
    // 将el挂载到实例上方便调用
    vm.$el = document.querySelector(el)
    // 在el范围里将内容都拿到，当然不能一个一个的拿
    // 可以选择移到内存中去然后放入文档碎片中，节省开销
    let fragment = document.createDocumentFragment()

    while ((child = vm.$el.firstChild)) {
        fragment.appendChild(child) // 此时将el中的内容放入内存中 移动效果 appendChild 如果该节点已经存在，则从当前父节点中删除，然后添加到新的父节点。
    }
    // 对el里面的内容进行替换
    function replace(frag) {
        Array.from(frag.childNodes).forEach(node => {
            let txt = node.textContent
            let reg = /\{\{(.*?)\}\}/g // 正则匹配{{}}

            if (node.nodeType === 3 && reg.test(txt)) {
                // 即是文本节点又有大括号的情况{{}}
                console.log(RegExp.$1) // 匹配到的第一个分组 如： a.b, c
                let arr = RegExp.$1.split('.')
                console.log(arr)
                let val = vm
                arr.forEach(key => {
                    val = val[key] // 如this.a.b
                })
                console.log(val) // 替成成实际的值
                // 用trim方法去除一下首尾空格
                node.textContent = txt.replace(reg, val).trim()
            }
            // 如果还有子节点，继续递归replace
            if (node.childNodes && node.childNodes.length) {
                replace(node)
            }
        })
    }

    replace(fragment) // 替换内容
    vm.$el.appendChild(fragment) // 再将文档碎片放入el中
}

// 创建一个Observe构造函数
// 写数据劫持的主要逻辑
function Observe(data) {
    // 所谓数据劫持就是给对象增加get,set
    // 先遍历一遍对象再说
    for (let key in data) {
        // 把data属性通过defineProperty的方式定义属性
        let val = data[key]
        observe(val) // 递归继续向下找，实现深度的数据劫持
        Object.defineProperty(data, key, {
            configurable: true,
            get() {
                return val
            },
            set(newVal) {
                // 更改值的时候
                if (val === newVal) {
                    // 设置的值和以前值一样就不理它
                    return
                }
                val = newVal // 如果以后再获取值(get)的时候，将刚才设置的值再返回去
                observe(newVal) // 当设置为新值后，也需要把新值再去定义成属性
            },
        })
    }
}

// 外面再写一个函数
// 不用每次调用都写个new
// 也方便递归调用
function observe(data) {
    // 如果不是对象的话就直接return掉
    // 防止递归溢出
    if (!data || typeof data !== 'object') return
    return new Observe(data)
}
