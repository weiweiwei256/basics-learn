/**
 * Created by Jim wei on 2018/4/12 0012.
 */
// 创建一个Observe构造函数
// 写数据劫持的主要逻辑
function Observe(data) {
  // 所谓数据劫持就是给对象增加get,set
  // 先遍历一遍对象再说
  for (let key in data) {     // 把data属性通过defineProperty的方式定义属性
      let val = data[key];
      observe(val);   // 递归继续向下找，实现深度的数据劫持
      Object.defineProperty(data, key, {
          configurable: true,
          get() {
              return val;
          },
          set(newVal) {   // 更改值的时候
              if (val === newVal) {   // 设置的值和以前值一样就不理它
                  return;
              }
              val = newVal;   // 如果以后再获取值(get)的时候，将刚才设置的值再返回去
              observe(newVal);    // 当设置为新值后，也需要把新值再去定义成属性
          }
      });
  }
}

// 外面再写一个函数
// 不用每次调用都写个new
// 也方便递归调用
function observe(data) {
  // 如果不是对象的话就直接return掉
  // 防止递归溢出
  if (!data || typeof data !== 'object') return;
  return new Observe(data);
}
// ������дһ������
// ����ÿ�ε��ö�д��new
// Ҳ����ݹ����
function observe(data) {
  // ������Ƕ���Ļ���ֱ��return��
  // ��ֹ�ݹ����
  if (!data || typeof data !== 'object') return;
  return new Observe(data);
}

// ����һ��Mvvm���캯��
// ������es6������options��һ����ʼֵ����ֹû������ͬ��options || {}
function Mvvm(options = {}) {
  // vm.$options Vue���ǽ��������Թ��ص�����
  // ��������Ҳͬ��ʵ��,���������Թ��ص���$options
  this.$options = options;
  // this._data ����Ҳ��Vueһ��
  let data = (this._data = this.$options.data);

  // ���ݽٳ�
  observe(data);
  // this ������this._data
  for (let key in data) {
    Object.defineProperty(this, key, {
      configurable: true,
      get() {
        return this._data[key]; // ��this.a = {b: 1}
      },
      set(newVal) {
        this._data[key] = newVal;
      }
    });
  }
  // ����
  new Compile(options.el, this);
}
// ����Compile���캯��
function Compile(el, vm) {
  // ��el���ص�ʵ���Ϸ������
  vm.$el = document.querySelector(el);
  // ��el��Χ�ｫ���ݶ��õ�����Ȼ����һ��һ������
  // ����ѡ���Ƶ��ڴ���ȥȻ������ĵ���Ƭ�У���ʡ����
  let fragment = document.createDocumentFragment();

  while ((child = vm.$el.firstChild)) {
    fragment.appendChild(child); // ��ʱ��el�е����ݷ����ڴ���
  }
  // ��el��������ݽ����滻
  function replace(frag) {
    Array.from(frag.childNodes).forEach(node => {
      let txt = node.textContent;
      let reg = /\{\{(.*?)\}\}/g; // ����ƥ��{{}}

      if (node.nodeType === 3 && reg.test(txt)) {
        // �����ı��ڵ����д����ŵ����{{}}
        console.log(RegExp.$1); // ƥ�䵽�ĵ�һ������ �磺 a.b, c
        let arr = RegExp.$1.split('.');
        let val = vm;
        arr.forEach(key => {
          val = val[key]; // ��this.a.b
        });
        // ��trim����ȥ��һ����β�ո�
        node.textContent = txt.replace(reg, val).trim();
        new Watcher(vm, RegExp.$1, newVal => {
          node.textContent = txt.replace(reg, newVal).trim();
        });
      }
      // ��������ӽڵ㣬�����ݹ�replace
      if (node.childNodes && node.childNodes.length) {
        replace(node);
      }
    });
  }

  replace(fragment); // �滻����

  vm.$el.appendChild(fragment); // �ٽ��ĵ���Ƭ����el��
}

// ��������ģʽ  ���ĺͷ��� ��[fn1, fn2, fn3]
function Dep() {
  // һ������(��ź������¼���)
  this.subs = [];
}
Dep.prototype = {
  addSub(sub) {
    this.subs.push(sub);
  },
  notify() {
    // �󶨵ķ���������һ��update����
    this.subs.forEach(sub => sub.update());
  }
};
// ��������
// ͨ��Watcher����ഴ����ʵ������ӵ��update����
function Watcher(vm, exp, fn) {
  this.fn = fn;
  this.vm = vm;
  this.exp = exp;
  // ����һ���¼�
  // ���������ȶ���һ������
  Dep.target = this;
  let arr = exp.split('.');
  let val = vm;
  arr.forEach(key => {
    // ȡֵ
    val = val[key]; // ��ȡ��this.a.b��Ĭ�Ͼͻ����get����
  });
  Dep.target = null;
}
Watcher.prototype.update = function() {
  // notify��ʱ��ֵ�Ѿ�������
  // ��ͨ��vm, exp����ȡ�µ�ֵ
  let arr = this.exp.split('.');
  let val = this.vm;
  arr.forEach(key => {
    val = val[key]; // ͨ��get��ȡ���µ�ֵ
  });
  this.fn(val); // ��ÿ���õ�����ֵȥ�滻{{}}�����ݼ���
};

//���ߣ�chenhongdong
//���ӣ�https://juejin.im/post/5abdd6f6f265da23793c4458
//    ��Դ�����
//����Ȩ���������С���ҵת������ϵ���߻����Ȩ������ҵת����ע��������
