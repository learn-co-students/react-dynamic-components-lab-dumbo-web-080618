import React, { Component } from 'react';  //the curly braces are destructuring
//which means that inside of the react object you have a key called component
//when you see the key component just grab it is what that {Component} is saying
import BlogPost from './BlogPost.js'
import ColorBox from './ColorBox.js'
import Comment from './Comment.js'

class App extends Component {
  //extends mean inherit from Component
  // Nothing needs to change here!
  // Make note of what prop we are initially passing to `ColorBox` below!

  render() {
    return (
      <div id="app">
          <BlogPost />
          <Comment />
          <div id="seperator"></div>
          <div className="wrapper">
            <ColorBox opacity={1} />
          </div>
      </div>
    )
  }
}

export default App;
