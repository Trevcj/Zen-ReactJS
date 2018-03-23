import React, {Component} from 'react';
import About from "../Images/pngZen.png";
import Our from "../Images/pngTeam.png";
import FAQ from "../Images/pngFAQ.png";
import Advice from "../Images/pngArtboard24.png";
import More from "../Images/pngmore.png";
import Navbar from "./NavbarMenu.js";

class Dash extends Component {
  render() {
    return (

      <div className="Dash">
      <Navbar />
      <h3 id="whatIsZen">What is ZenBusiness?</h3>
      <div className="tableDiv">
        <table className="dashTable">
          <tbody>
            <tr>
              <td className="dashData">
                <a href="/about">
                  <img className="dashImg" src={About} alt="dashImg"></img>
                  <p className="dashP">About</p>
                </a>
              </td>
              <td className="dashData">
                <a href="/ourTeam">
                  <img className="dashImg" src={Our} alt="dashImg"></img>
                  <p className="dashP">Our Team</p>
                </a>
              </td>
            </tr>
            <tr>
              <td className="dashData">
                <img className="dashImg" src={FAQ} alt="dashImg"></img>
                <p className="dashP">F.A.Q.</p>
              </td>
              <td className="dashData">
                <img className="dashImg" src={Advice} alt="dashImg"></img>
                <p className="dashP">Advice</p>
              </td>
            </tr>
            <tr>
              <td className="dashData">
                <img className="dashImg" src={More} alt="dashImg"></img>
                <p className="dashP">More</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>);

  }
}

export default Dash;
