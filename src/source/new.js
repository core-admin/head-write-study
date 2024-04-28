/**
 *
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
