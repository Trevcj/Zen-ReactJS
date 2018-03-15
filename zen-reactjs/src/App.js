import React, { Component } from 'react';
import Navbar from "./Components/Navbar.js";
import Dash from "./Components/Dash.js";
import About from "./Components/about.js";
import Ourteam from "./Components/our-team.js";
import './App.css';
import './Components/Style/about.css';
// import './Components/Style/advice.css';
import './Components/Style/dash.css';
// import './Components/Style/FAQ.css';
// import './Components/Style/more.css';
import './Components/Style/navbar.css';
import './Components/Style/our-team.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <About />
      </div>
    );
  }
}

export default App;
