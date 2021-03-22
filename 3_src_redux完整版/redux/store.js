/* 
  该文件专门用于暴漏一个store 对象，整个应用只有一个 store 对象
*/

// 引入 createStore ，专门用于创建 redux 中最核心的 store 对象
import {createStore} from 'redux'
// 引入为Count 组件服务的 reducer
import countReducer from './count_reducer'

const store = createStore(countReducer);

export default store;