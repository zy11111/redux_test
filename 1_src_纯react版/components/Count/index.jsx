import React, { Component } from 'react';

class Count extends Component {

  state = {
    count: 0
  }

  increment = () => {
    const {count} = this.state;
    const {value} = this.selectNumber;
    this.setState({
      count: count + value*1
    })
  }

  decrement = () => {
    const {count} = this.state;
    const {value} = this.selectNumber;
    this.setState({
      count: count - value*1
    })
  }

  incrementIfOdd = () => {
    const {count} = this.state;
    const {value} = this.selectNumber;
    if(count %2 !== 0) {
      this.setState({
        count: count + value*1
      })
    }
  }

  incrementAsync = () => {
    const {count} = this.state;
    const {value} = this.selectNumber;
    setTimeout(() => {
      this.setState({
        count: count + value*1
      })
    }, 500)
  }

  render() {
    return (
      <div>
        <h3>当前求和为：{this.state.count}</h3>
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