// 初始化、加工状态 

import {ADD_PERSON} from '../constant'

const initState = [{id: '001', name: 'jack', age: 18}]
export default function personReducer(preState=initState, action) {
  const {type, data} = action;
  switch (type) {
    case ADD_PERSON: 
      return [data, ...preState]
    default: 
      return preState
  }
}