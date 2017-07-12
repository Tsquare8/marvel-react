import React, { Component } from 'react';
import './App.css';

//if Navigation is not set up as export default would need to add {} around Navigation below.
import Navigation from './components/navigation/Navigation'
import Characters from './containers/Characters'


class App extends Component {
  render() {
    return (
      <div>
      <Navigation />
      <Characters />
      </div>
    );
  }
}

export default App;
