import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store'
import {Provider} from 'react-redux'

ReactDOM.render(
  // 此处需要用Provide 包裹App，目的是让App 所有的后代容器组件都能接收到store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// // 监测redux中状态的改变，如redux的状态发生了改变，那么重新渲染App组件
// store.subscribe(() => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// })
