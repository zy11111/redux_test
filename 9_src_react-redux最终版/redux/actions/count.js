/* 
  该文件专门为 Count 组件生成action 对象
*/
import {INCREMENT, DECREMENT} from '../constant'
// import store from './store'

// 同步action，就是指action的值为Object 类型的一般对象
export const increment = data => ({type: INCREMENT, data})

export const decrement = data => ({type: DECREMENT, data})

// 异步action，就是指action的值为函数,异步action中一般都会调用同步action，异步action 不是必须要用的
export const incrementAsync = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      // store.dispatch({type: INCREMENT, data})
      // store.dispatch(createIncrementAction(data))
      dispatch(increment(data))
    }, time)
  }
}