import { myCall } from './call';

export function myApply(fn, context, params) {
  return myCall(fn, context, ...params);
}
