// src/components/AddFood.js

import React from 'react'

class AddFood extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      calories: 0,
      image: '',
      quantity: 0,
    }
  }

  addTheFood = (event) => {
    event.preventDefault();
    
    this.props.addTheFood(this.state);
    this.setState({ name: '', calories: 0, image: '', quantity: 0,});
  }
  

  handleChangeFood(event) {
    event.preventDefault()

    let { name, value } = event.target;
    
    this.setState( { [name]: value } )
  }

  render() {
    
    return (
      <div>
        <form onSubmit={this.addTheFood}>
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChangeFood(e)} />
          <label>Calories:</label>
          <input type="number" name="calories" value={this.state.calories} onChange={(e) => this.handleChangeFood(e)} />
          <label>Image:</label>
          <input type="text" name="image" value={this.state.image} onChange={(e) => this.handleChangeFood(e)} />
          <button type="submit">ADD</button>
        </form>
      </div>
    )
  }
}

export default AddFood
