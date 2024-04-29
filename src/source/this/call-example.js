/**
 * example
 */
import { myCall } from ' ./call';

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
