import React, { Component } from 'react';

class Comments extends Component{
  render(){
    let comments = this.props.comments.map((comment, index)=>{
      return(
        <div key={index} className="comment-box">
          <div className="comment-title">{comment.title}</div>
          <div className="comment-desc">{comment.desc}</div>
        </div>
      )
    });

    return(
      <div className="comment-section">
        <div className="comment-header">
          <h3>Comments</h3>
          <div>
            <button type="button" className="close-btn" onClick={this.props.close}>X</button>
          </div>
        </div>
        <div className="comment-body">
          {comments}
        </div>
      </div>
    );
  }
}

export default Comments;