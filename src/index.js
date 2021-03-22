import React from 'react'
import ReactDOM from 'react-dom'
// 引入Provider 包裹App，用于给App中所有容器组件传递store
import {Provider} from 'react-redux'
// 引入store
import store from './redux/store'
import App from './App'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)