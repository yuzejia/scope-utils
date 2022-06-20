const lock = (fn: { (cb: () => any): any; call?: any }, manual = false) => {
    let locking = false
  
    return (...args: any) => {
      if (locking) return
      locking = true
      let done = () => {
        locking = false
      }
  
      if (manual) return fn.call(this, ...args, done)
  
      let promise = fn.call(this, ...args)
      Promise.resolve(promise)
        .then(done)
        .catch(done)
      return promise
    }
  }
  
  const useLock = lock((cb: () => any) => {
    return cb()
  }, false)
  
  export default useLock