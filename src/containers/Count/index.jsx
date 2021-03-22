import React, { Component } from 'react';
// 引入react-redux中的connect 用于创建容器组件
import {connect} from 'react-redux'

// 
import {increment, decrement, incrementAsync} from '../../redux/actions/count'

class Count extends Component {

  increment = () => {
    const {value} = this.selectNum;
    this.props.increment(value*1)
  }

  decrement = () => {
    const {value} = this.selectNum;
    this.props.decrement(value*1)
  }

  incrementIfOdd = () => {
    const {value} = this.selectNum;
    const {count} = this.props;
    if(count % 2 !== 0) {
      this.props.increment(value*1)
    }
  }

  incrementAsync = () => {
    const {value} = this.selectNum;
    this.props.incrementAsync(value*1, 500)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h3>当前组件为：Count组件，下方组件的人数为：{this.props.personCount}</h3>
        <h4>求和为：{this.props.count}</h4>
        <select ref={c => this.selectNum = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>奇数的时候加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    );
  }
}

// connect(mapStateToProps, mapDispatchToProps)(UI组件)
export default connect(
  state => ({count: state.count, personCount: state.persons.length}),
  // dispatch => ({
  //   increment: number => dispatch(increment(number)),
  //   decrement: number => dispatch(decrement(number)),
  //   incrementAsync: (number, time) => dispatch(incrementAsync(number, time))
  // })
  {
    increment,
    decrement,
    incrementAsync
  }
)(Count)
