(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ktools = {}));
})(this, (function (exports) { 'use strict';

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

  exports.useOnce = useOnce;
  exports.useState = State;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
