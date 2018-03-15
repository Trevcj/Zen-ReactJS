import React, { Component } from 'react';


class Navbar extends Component {
  render() {
    return (
        <div className="Navbar">
           <div className="slideOut">
              <div id="menuExit">
                <i className="material-icons" id="menu">menu</i>
              </div>
              <div id="links" hidden>
                <a href="#"><h1 id="slideNames">Home</h1></a>
                <a href="#"><h1 id="slideNames">About ZenBusiness</h1></a>
                <a href="#"><h1 id="slideNames">Contact ZenBusiness</h1></a>
              </div>
              <div id="signIn">
                <a href="#"><h1 id="slideSignIn" hidden>Sign in</h1></a>
            </div>
            </div>
          <div className="nav">
            <div className="arrow">
              <i className="material-icons" id="menu">menu</i>
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
