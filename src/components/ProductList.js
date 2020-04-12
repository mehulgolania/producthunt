import React, { Component } from 'react';
import products from '../data/data.json';
import Product from './Product';
import Filter from './Filter';

class ProductList extends Component{
  constructor(props){
    super(props)

    this.state = {
      data: products,
      filterDate: ''
    }
  }

  filterBy = (e) => {
    this.setState({
      filterDate: e.target.value
    });
  }

  render(){
    let filteredProducts = this.state.data.filter((data)=>{
      if (this.state.filterDate === 'All'){
        return data;
      }
      else{
        return data.postDate.includes(this.state.filterDate)
      }
    });

    return (
      <section className="products-section">
        <h2>This are the <b>Products.</b></h2>

        <Filter handleFilter={this.filterBy}  />
        <Product filteredData={filteredProducts} />
      </section>
    )
  }
}

export default ProductList;