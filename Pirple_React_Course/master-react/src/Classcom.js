import React from "react";
import {Detail} from './Detail';

export class Car extends React.Component {
  state = {
    laptops: [
      {ram:"200B", hdd:"500B", processor:"core i2"}
    ]
  }
  render(){
    return(
      <div>
        <h2>I have a new Car from the Car class</h2>
        <p>We have {this.props.classData} {this.props.newClassData}</p>
        <Detail ram={this.state.laptops[0].ram}/>    
      </div>
    )
  }
};

export class Model extends React.Component{
  render(){
    return(
      <div>
        <h4>The Model is Toyota</h4>
      </div>
    )
  }
};