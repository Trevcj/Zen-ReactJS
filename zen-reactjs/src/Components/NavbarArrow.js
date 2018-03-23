import React, { Component } from 'react';


class Navbar extends Component {
  render() {
    return (
        <div className="Navbar">
          <div className="nav">
            <div className="arrow">
              <a href="/"><i className="material-icons" id="leftArrow">keyboard_arrow_left</i></a>
            </div>
            <div className="zenHeader">
              <p className="zenText">
                <span id="blue">zen</span>business</p>
            </div>
          </div>
        </div>
    );
  }
}

export default Navbar;
