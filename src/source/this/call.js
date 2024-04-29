/**
 * 注意：严格模式下，普通函数的 this 为 undefined，非严格模式下为 window。
 */

export function myCall(fn, context, ...args) {
  if (typeof fn !== 'function') {
    throw new TypeError('fn is not a function');
  }
  // 如果 context 为 null 或者 undefined，则设置为 window
  context = context ?? window;
  // 把方法挂载到 context 上，使用 Symbol 防止属性名冲突
  const key = Symbol('fn');
  context[key] = fn;
  // 此处更改 fn this指向的方式便是通过谁调用 fn，this 就指向谁
  const result = context[key](...args);
  delete context[key];
  return result;
}

/**
 * example
 */

window.name = 'top window';

function fn1(p1, p2) {
  console.log(this, this.name, '参数：', p1, p2);
}

const obj = {
  name: 'obj',
  fn: fn1,
};

fn1(1, 2); // top window 参数： 1 2
myCall(fn1, obj, 1, 2); // obj 参数： 1 2

obj.fn('a', 'b'); // obj 参数： a b
obj.fn.call(); // top window 参数： undefined undefined

const fn2 = obj.fn;
fn2(1, 2); // top window 参数： 1 2
fn2.call(obj); // obj 参数： undefined undefined
