import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox';
import foods from './data/foods.json';

class App extends Component {
  render() {
    return (
      <div >

        <FoodBox foods={foods}/>

      </div>
    );
  }
}

export default App;
