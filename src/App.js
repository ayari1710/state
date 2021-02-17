import React, { Component } from "react";
import Profil from "./Profil";
import "./App.css"
export default class App extends Component {
 state={
   show:false,
   count:0,
 }

  handleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  componentDidMount(){
setInterval(() => {
  this.setState({count:this.state.count+1})
}, (1000));
  }
  render() {
    return (
      <div className="cadre">
        <button className="boutton" onClick={this.handleShow}>toggle</button>
        <h2>{this.state.count}</h2>
        {this.state.show && <Profil />}
      </div>
    );
  }
}
