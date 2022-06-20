'use strict';

const lock = (fn, manual = false) => {
    let locking = false;
  
    return (...args) => {
      if (locking) return
      locking = true;
      let done = () => {
        locking = false;
      };
  
      if (manual) return fn.call(undefined, ...args, done)
  
      let promise = fn.call(undefined, ...args);
      Promise.resolve(promise)
        .then(done)
        .catch(done);
      return promise
    }
  };
  
  const useLock = lock(cb => {
    return cb()
  }, false);

module.exports = useLock;
