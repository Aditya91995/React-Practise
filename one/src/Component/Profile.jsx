import React, { Component } from 'react'



class Profile extends React.Component{
 
  
    render(){
      console.log(this.props.data)
      return (
        <div>
          <h1>Profile</h1>
          <p>Name: {this.props.data.name}</p>
          <p>Age: {this.props.data.age}</p>
          <p>Gender: {this.props.data.gender}</p>
        </div>
      );
  }
  }
  export default Profile

