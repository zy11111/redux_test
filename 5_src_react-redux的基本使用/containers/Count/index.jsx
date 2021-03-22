// 引入Count 的UI组件
import CountUI from '../../components/Count'
// 引入connect 用于连接ui组件与redux
import {connect} from 'react-redux'

// 引入action
import {createIncrementAction, createDecrementAction, createIncrementAsyncAction} from '../../redux/count_action'

/* 
  1. mapStateToProps 函数返回的是一个对象：
  2. 返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
  3. mapStateToProps 用于传递状态
*/

// 函数的返回值作为状态传递给了UI组件,返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
function mapStateToProps(state) {
  return {count: state}
}

/* 
  1. mapDispatchToProps 函数返回的是一个对象：
  2. 返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
  3. mapDispatchToProps 用于传递操作状态的方法
*/

function mapDispatchToProps(dispatch) {
  return {
    jia: number => dispatch(createIncrementAction(number)),
    jian: number => dispatch(createDecrementAction(number)),
    jiaAsync: (number,time) => dispatch(createIncrementAsyncAction(number,time))
  }
}

// 使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
// const CountContainer = connect()(CountUI)

// export default CountContainer