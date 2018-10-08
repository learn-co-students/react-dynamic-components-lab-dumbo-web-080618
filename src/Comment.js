// add Comment component here
import React, { Component } from 'react';

class X extends Component{
 
  render(){
    
    return (
      <div className="comment">
      {this.props.commentText}
      </div>
      );
  }
  
  
}


export default X;