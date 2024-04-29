/**
 * https://github.com/febobo/web-interview/issues/69
 * 
 * new 操作符具体干了什么？
 * 
 * new 操作符在JavaScript中用于创建一个用户自定义的对象类型的实例或具有构造函数的内置对象类型的实例。使用new进行操作时，它具体执行了以下步骤：
 *  1. 创建一个空对象
 *  2. 将空对象的原型指向构造函数的原型
 *  3. 绑定this到空对象
 *  4. 执行构造函数
 *  5. 返回新对象：如果构造函数没有显式返回一个对象，则new表达式结果就是步骤1创建的对象。
 *     但如果构造函数返回了一个非null对象，new操作符会返回构造函数返回的那个对象，而不是刚创建的这个新对象。
 */

function CustomNew(constructor, ...args) {
  /**
   * 1. 创建一个空对象
   * 2. 将空对象的原型指向构造函数的原型
   */
  const instance = Object.create(constructor.prototype);

  /**
   * 3. 执行构造函数
   * 4. 将构造函数的 this 指向这个空对象
   */
  const result = constructor.apply(instance, args);

  /**
   * 5. 如果构造函数返回的是对象（非null），则返回这个对象
   */
  if ((typeof result === 'object' || typeof result === 'function') && typeof result !== null) {
    return result;
  }

  return instance;
}

function Test() {
  this.name = 'test';
  // return null;
  // return [];
}

Test.prototype.say = function () {
  console.log(this.name);
};

// window.test = new Test(Test);
window.test = CustomNew(Test);
console.log(test);
test.say();
