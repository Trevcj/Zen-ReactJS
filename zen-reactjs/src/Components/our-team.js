import React, { Component } from 'react';
import Ross from "../Images/Ross-Buhrdorf-Founder.JPG"
import Shanaz from "../Images/Shanaz-Hemmati-Founder.JPG"
import JC from "../Images/JC-Glancy-Founder.JPG"


class ourTeam extends Component {
  render() {
    return (
        <div className="ourTeam">

          <h3 id="team">Our Team</h3>

          <div className="teamMember">
            <div className="memberImg-div"><img id="memberImg" alt="teamMem" src={Ross}></img></div>
            <div className="memberName"><p><span id="bold">Ross Buhrdorf</span><br></br> CEO</p></div>
            <div className="memberBio">
            <p id="bio">
              Ross runs ZenBusiness.  He previously was the founding CTO for HomeAway
              (NASDAQ:AWAY).  His technology built the company from a startup, through the IPO to its
              recent acquisition by Expedia (NASDAQ: EXPE) for $3.9B.  In his more than 30 years as a
              technology leader, entrepreneur and c-level corporate executive in both public and private
              companies, Ross helps transform the way consumers interact with technology.
            </p>
            </div>
          </div>

          <div className="teamMember">
            <div className="memberImg"><img id="memberImg" alt="teamMem" src={Shanaz}></img></div>
            <div className="memberName"><p><span id="bold">Shanaz Hemmati</span><br></br>CIO and Co-Founder</p></div>
            <div className="memberBio">
            <p id="bio">
              Shanaz runs the technology that runs the company.  She has more than 30 years of experience
              in technology and was previously the Global VP of Information Systems for HomeAway
              (NASDAQ:AWAY), where she led a global team responsible for data infrastructure and
              engineering, data tools and products, data science, analytics, CRM and ERP systems.
            </p>
            </div>
          </div>

          <div className="teamMember">
            <div className="memberImg"><img id="memberImg" alt="teamMem" src={JC}></img></div>
            <div className="memberName"><p><span id="bold">James Glancy</span><br></br>Founder</p></div>
            <div className="memberBio">
            <p id="bio">
              JC Glancy is a lifelong entrepreneur. He graduated with a double major in Entrepreneurship and
              Business Management from Northwood University. Prior to founding ZenBusiness, JC worked
              at Facebook as a Page Operations Analyst. JC’s Notable Achievements include being accepted
              into the Capital Factory accelerator and mentoring for Longhorn Startup Labs at the University
              of Texas.
            </p>
            </div>
          </div>
        </div>
    );
  }
}

export default ourTeam;
