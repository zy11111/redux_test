// 引入combineReducers,用于连接两个reducer
import {combineReducers} from 'redux'

// 引入reducer
import count from './count'
import persons from './person'

export default combineReducers({
  count,
  persons
})