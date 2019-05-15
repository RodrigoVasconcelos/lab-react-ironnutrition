//  src/components/FoodBox.js

import React, { Component } from 'react';
import './FoodBox.css';
import FoodCard from './FoodCard';
import AddFood from './AddFood';
import SearchBar from './SearchBar';

class FoodBox extends Component {
  constructor(props) {
    super();
    this.state = {
      foods: props.foods,
      showForm: false,
    }
  };

  toggleAddButton = () => {
    // console.log(this.state.showForm);

    this.setState({showForm: !this.state.showForm})
  }

  addTheFood = (newFood) => {
    const foodsCopy = [...this.state.foods];
    
    foodsCopy.push(newFood)
    this.toggleAddButton();
    this.setState({foods: foodsCopy})
    console.log('foodsCopy',foodsCopy)
  }

  render() {
    return (
      <div>

        <SearchBar foods={this.state.foods} />

        {this.state.showForm ? <AddFood addTheFood={this.addTheFood} /> : <button onClick={this.toggleAddButton}>ADD</button>}

        {
          this.state.foods.map( ( oneFood, index ) => { return (
            <FoodCard
            key={index}
            {...oneFood}
            />
          )})
        }
      </div>
    )
  }
};

export default FoodBox;