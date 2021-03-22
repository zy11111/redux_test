// 引入redux 中的 creaeteStore，用于创建store对象
// 引入中间件applyMiddleware
import {createStore, applyMiddleware} from 'redux'
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'

// const store = createStore(countReducer, applyMiddleware(thunk));

// export default store;

import allReducers from './reducers/index'

export default createStore(allReducers, applyMiddleware(thunk));