/* 
  该文件用于汇总所有的reducer 为一个总的reducer
*/
// 引入combineReducers 用于汇总多个reducer
import {combineReducers} from 'redux'
// 引入为Count 组件服务的 reducer
import count from './count'

import persons from './person'

export default combineReducers({
  count, 
  persons
});

