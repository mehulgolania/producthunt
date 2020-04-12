import React, { Component } from 'react';
import Comments from './Comments';

class Product extends Component{
  constructor(props){
    super(props)

    this.state = {
      comments: "",
      showComments: false
    }
    this.handleComments = this.handleComments.bind(this);
    this.closeComments = this.closeComments.bind(this);
  }

  handleComments = (event) => {
    this.setState(
      { 
        comments: event,
        showComments: true
      }
    );
  }
  closeComments = () => {
    this.setState(
      {
        comments: "",
        showComments: false
      }
    );
  }

  render(){
    let products = this.props.filteredData.map((data, index)=>{
      return(
        <div key={index} className="flex-item">
          <img src={data.image} />
          <div className="item-desc">
            <h3>{data.productName}</h3>
            <p>{data.desc}</p>
          </div>

          <div className="item-other-desc">
            <div>Date: {data.postDate}</div>
            <div className="see-comments">
              <button type='button' key={data.id} onClick={(e) => this.handleComments(data.comments)}>See Comments</button>
            </div>
          </div>
        </div>
      )
    });

    return(
      <div className="product-list">
        {products}

        {this.state.showComments? <><Comments comments={this.state.comments}  close={this.closeComments} /><span className="backdrop"></span></>: null }
      </div>
    );
  }
}
export default Product;