import React, { Component } from "react";
import Profil from "./Profil";
import "./App.css"
export default class App extends Component {
 state={
   show:false
 }

  handleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    return (
      <div className="cadre">
        <button className="boutton" onClick={this.handleShow}>toggle</button>
        {this.state.show && <Profil />}
      </div>
    );
  }
}
