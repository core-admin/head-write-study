import { myCall } from './call';

export function myBind(fn, context, ...args) {
  if (typeof fn !== 'function') {
    throw new TypeError('Wrong parameter, only functions can use this method');
  }

  return function (...params) {
    /**
     * 需要先判断下是否是通过 new 调用的，如果是通过 new 调用的话，那么 this 就是当前实例
     */
    if (this instanceof fn) {
      return new fn(...args, ...params);
    }
    return myCall(fn, context, ...args, ...params);
  };
}
