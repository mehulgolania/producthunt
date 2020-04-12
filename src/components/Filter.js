import React, { Component } from 'react';

class Filter extends Component{
  render(){
    return(
      <div className="filter-section">
          <label>Filter By:</label>
          <select onChange={this.props.handleFilter}>
            <option>All</option>
            <option>12/04/2020</option>
            <option>11/04/2020</option>
            <option>10/04/2020</option>
          </select>
        </div>
    );
  }
}

export default Filter;