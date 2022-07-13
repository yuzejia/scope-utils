/*
 * 状态模式 状态机
 *  */
class State {
    constructor(actions) {
      this.currentState = []
      this.actions = actions
    }
  
    change(...args) {
      this.currentState = []
      Object.keys(args).forEach(i => this.currentState.push(args[i]))
      return this
    }
  
    go(params) {
      this.currentState.forEach(k => this.actions[k] && this.actions[k](params))
      return this
    }
  }
  
  export default State
  