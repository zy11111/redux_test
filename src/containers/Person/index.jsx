import React, { Component } from 'react';
// 引入connect 用于创建容器组件
import {connect} from 'react-redux'

import {nanoid} from 'nanoid'

import {addPerson} from '../../redux/actions/person'

class Person extends Component {

  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    const personObj = {id: nanoid(), name, age};
    this.props.addPerson(personObj);
  }

  render() {
    return (
      <div>
        <h3>上方组件求和为：{this.props.count}</h3>
        <input ref={c => this.nameNode = c} type="text" placeholder="请输入名字"/>&nbsp;
        <input ref={c => this.ageNode = c} type="text" placeholder="请输入年龄"/>&nbsp;
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {
            this.props.persons.map(personObj => {
              return <li key={personObj.id}>{personObj.name} -- {personObj.age}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({persons: state.persons, count: state.count}),
  {
    addPerson
  }
)(Person);
