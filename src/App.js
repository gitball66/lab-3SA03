import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WordCard from './WordCard';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '',hint: ''};
  }
  popup = () => {
    var xans,xhint;
    var answer = prompt("Player 1 : Please enter your some text:", "EX.HELLO");
    var hint = prompt("Player 1 : Please enter your hint:", "Ex.say every day");
    if (answer == null || answer == "") {
      xans = "";
    } else {
      xans = answer;
    }
    if (hint == null || hint == "") {
      xhint = "No have hint!!";
  } else {
      xhint = hint;
  }
    this.state.value = xans;
    this.state.hint = xhint;
  }

  render() {
    return ( 
      <div>
          {this.popup()}   
          <center> 
            <h1>Player 2</h1>
            <WordCard value={this.state.value}/>
            <h1>Hint</h1>
            <p>{this.state.hint}</p>
            <p><br></br>create by gitball</p>
          </center>      
      </div>
    );
  }
}

export default App;