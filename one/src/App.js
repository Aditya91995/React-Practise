import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Profile from './Component/Profile'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {      //This is the state.
      name : "Patrick",
      age : 21,
      gender: "Male"
    }
  }
  
  render() {
    return (
  
          <div className="App">
      {/* <Btn/> */}
      <Profile data={this.state}/>
    </div>
    )
  }
}

export default App
