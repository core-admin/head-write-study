function myCall(fn, context, ...args) {
  context = context ?? window;
  const key = Symbol('call_fn');
  context[key] = fn;
  const result = context[key](...args);
  delete context[key];
  return result;
}

function myApply(fn, context, args) {
  context = context ?? window;
  const key = Symbol('apply_fn');
  context[key] = fn;
  const result = context[key](...args);
  delete context[key];
  return result;
}

function myBind(fn, context, ...args) {
  context = context ?? window;
  return function (...params) {
    if (this instanceof fn) {
      return new fn(...args, ...params);
    }
    return myCall(fn, context, ...args, ...params);
  };
}
