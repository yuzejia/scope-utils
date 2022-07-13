// 函数只执行一次
var useOnce = (fn) => {
    let called = false;
    return (...args) => {
      if (!called) {
        called = true;
        fn.apply(undefined, args);
      }
    }
  };

/*
 * 状态模式 状态机
 *  */
class State {
    constructor(actions) {
      this.currentState = [];
      this.actions = actions;
    }
  
    change(...args) {
      this.currentState = [];
      Object.keys(args).forEach(i => this.currentState.push(args[i]));
      return this
    }
  
    go(params) {
      this.currentState.forEach(k => this.actions[k] && this.actions[k](params));
      return this
    }
  }

export { useOnce, State as useState };
