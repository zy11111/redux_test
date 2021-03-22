import React, { Component } from 'react';
import {nanoid} from 'nanoid'

import {connect} from 'react-redux'
import {createAddPersonAction} from '../../redux/actions/person'

class Person extends Component {

  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    const personObj = {id: nanoid(), name, age};
    console.log(personObj)
    this.props.add(personObj);
    this.nameNode.value = '';
    this.ageNode.value = '';
  }

  render() {
    return (
      <div>
        <h3>上方组件求和为：{this.props.count}</h3>
        <input ref={c => this.nameNode = c} type="text" placeholder="输入名字"/>
        <input ref={c => this.ageNode = c} type="text" placeholder="输入年龄"/>
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {
            this.props.personList.map(personObj => {
              return <li key={personObj.id}>{personObj.name}--{personObj.age}</li>
            }) 
          }
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({personList: state.persons, count: state.he}),
  {add: createAddPersonAction}
)(Person)