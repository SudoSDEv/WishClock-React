import React, { Component } from 'react';
import './App.css';
import Clock from './Clock.js';

class App extends Component {
  
  constructor(props)
  {
    super(props);
    this.state={
      time:new Date().toLocaleTimeString()
    }
  }

  setTime = () =>{
      this.setState({time:new Date().toLocaleTimeString()});
  }

  componentDidMount(){
      setInterval(this.setTime,1000);
  }

  render() {
    return (
      <Clock time={this.state.time}/>
    );
  }

}

export default App;
