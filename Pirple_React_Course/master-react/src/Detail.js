import React from "react";

export class Detail extends React.Component{
  render(){
    return <p>I have a laptop with {this.props.ram} RAM, {this.props.hdd} hard drive, {this.props.processor} processor</p>
  }
};