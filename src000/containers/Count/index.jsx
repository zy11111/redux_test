// 引入Count 的UI组件
// import CountUI from '../../components/Count'
// 引入connect 用于连接ui组件与redux
import {connect} from 'react-redux'

// 引入action
import {increment, decrement, incrementAsync} from '../../redux/actions/count'

import React, { Component } from 'react';

// 定义UI组件
class Count extends Component {

  increment = () => {
    const {value} = this.selectNumber;
    this.props.increment(value*1);
  }

  decrement = () => {
    const {value} = this.selectNumber;
    this.props.decrement(value*1);
  }

  incrementIfOdd = () => {
    const {value} = this.selectNumber;
    const {count} = this.props; 
    if(count % 2 !== 0) {
      this.props.increment(value*1);
    }
  }

  incrementAsync = () => {
    const {value} = this.selectNumber;
    this.props.incrementAsync(value*1, 500)
  }

  render() {
    console.log("UI组件接收到的props：",this.props)
    return (
      <div>
        <h3>当前组件为：Count组件，下方组件人数为：{this.props.num}</h3>
        <h4>当前求和为：{this.props.count}</h4>
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

// 映射状态
// const mapStateToProps = state => ({count: state})

// 映射操作状态的方法
// const mapDispatchToProps = dispatch => (
//   {
//     jia: number => dispatch(createIncrementAction(number)),
//     jian: number => dispatch(createDecrementAction(number)),
//     jiaAsync: (number,time) => dispatch(createIncrementAsyncAction(number,time))
//   }
// )

// 使用connect()()创建并暴露一个Count的容器组件
// export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
export default connect(
  state => ({count: state.count, num: state.persons.length}),
  // mapDispatchToProps 的一般写法
  // dispatch => (
  //   {
  //     jia: number => dispatch(createIncrementAction(number)),
  //     jian: number => dispatch(createDecrementAction(number)),
  //     jiaAsync: (number,time) => dispatch(createIncrementAsyncAction(number,time))
  //   }
  // )  
  // 简写
  {
    increment,
    decrement,
    incrementAsync
  }
)(Count)
// const CountContainer = connect()(CountUI)

// export default CountContainer