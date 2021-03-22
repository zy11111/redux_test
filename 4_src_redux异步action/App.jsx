import React, { Component } from 'react';
import Count from './components/Count'
import store from './redux/store'

class App extends Component {
  render() {
    return (
      <div>
        <Count />
      </div>
    );
  }
}

export default App;