

// 函数只执行一次
var  useOnce = (fn) => {
    let called = false
    return (...args) => {
      if (!called) {
        called = true
        fn.apply(this, args)
      }
    }
  }

  export default useOnce;
