//create-react-app //is a console command that makes a react app
//React.createElement
//is talking about create a new components
//it tells us what it should look like
//ReactDOM.render
//It happens to appear

//There is a thing called react fragments that you can use instead of using the word div
//Fragments don't need divs or anything you don't need
//You can look up fragments if you want
//src/TextHolder.js (this is how components are made) you have to make a new file and write that new
//file with capital case

//1. We need to tell it to take in React and the Component function from 'react' library
//2. We need to make a class called TextHolder
//3. Make a method inside it called render
//4. Export this class
//Basic steps to write a new component

import React, { Component } from 'react';

//you need to import this component into App.js
//if you want to use it there
//import TextHolder from './TextHolder.js' inside of App.js and put
// the name of the component where you want it to display
// <TextHolder /> //wherever you want it to display inside of your App.js return section

export default class TextHolder extends Component{
  render(){
    return (
      <div> Hi my name is {this.props.name} and I {this.props.actions}</div>
      //inside of App.js you can do this <TextHolder name={'Prince'} actions={'play sports'}/> and it will insert that name in there
    )
  }
}
