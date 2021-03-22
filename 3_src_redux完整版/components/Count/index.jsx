import React, { Component } from 'react';
// 引入 store，用于获取redux 中保存的状态
import store from '../../redux/store'
// 引入actionCreator，用于创建 action 对象
import {createIncrementAction, createDecrementAction} from '../../redux/count_action'

class Count extends Component {


  // componentDidMount() {
  //   // 监听 redux 中状态的变化，只要变化，就调用render
  //   store.subscribe(() => {
  //     this.setState({})
  //   })
  // }

  increment = () => {
    const {value} = this.selectNumber;
    // store.dispatch({type: 'increment', data: value*1});
    store.dispatch(createIncrementAction(value*1));
  }

  decrement = () => {
    const {value} = this.selectNumber;
    // store.dispatch({type: 'decrement', data: value*1});
    store.dispatch(createDecrementAction(value*1));
  }

  incrementIfOdd = () => {
    const {value} = this.selectNumber;
    const count = store.getState();
    if(count %2 !== 0) {
      // store.dispatch({type: 'increment', data: value*1});
      store.dispatch(createIncrementAction(value*1));
    }
  }

  incrementAsync = () => {
    const {value} = this.selectNumber;
    setTimeout(() => {
      // store.dispatch({type: 'increment', data: value*1});
      store.dispatch(createIncrementAction(value*1));
    }, 500)
  }

  render() {
    return (
      <div>
        <h3>当前求和为：{store.getState()}</h3>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    );
  }
}

export default Count;