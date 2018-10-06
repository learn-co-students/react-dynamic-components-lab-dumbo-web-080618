import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {

    let opVal = this.props.opacity - .1;

    if (opVal >= .1){

      return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        <ColorBox opacity= {opVal} />
      </div>
      );

    } else {
      return null;
    }
  }

}
