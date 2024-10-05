import React from "react";

export class Car extends React.Component {
  render(){
    return(
      <div>
        <h2>I have a new Car</h2>
        <p>We have {this.props.classData} {this.props.newClassData}</p>
      </div>
    )
  }
};

export class Model extends React.Component{
  render(){
    return <h4>The Model is Toyota</h4>
  }
};