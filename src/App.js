// Imports
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import Game from "./Game";

class App extends Component {
  render() {
    console.log(this.props.questions);
    return (
      <div>
        <Game/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    state
  };
}

export default connect(mapStateToProps)(App);
