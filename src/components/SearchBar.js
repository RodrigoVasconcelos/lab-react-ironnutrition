// src/component/SearchBar.js

import React, { Component } from 'react'

class searchBar extends Component {
  state = {
    searchArray: [],
    search: '',
  }

  handleSearch = (event) => {
    event.preventDefault();
    let { value } = event.target;

    this.setState({search: value});
  }

  toSearch = (event) => {
    event.preventDefault();

    const searchArrayCopy = this.props.foods.filter( food => {
      return (this.state.search === food.name)
      })
    console.log(searchArrayCopy);
    this.setState({searchArray: searchArrayCopy});
  }

  render() {
    return (
      <div>
        <form onChange={this.toSearch}>
          <input type="text" name="search" value={this.state.search} onChange={(e) => this.handleSearch(e)}/>
        </form>
      </div>
    )
  }
}

export default searchBar
