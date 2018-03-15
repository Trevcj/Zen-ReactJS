import React, { Component } from 'react';
import Price from "../Images/pngPrice.png"
import Platform from "../Images/pngPlatform.png"
import People from "../Images/pngPeople.png"


class App extends Component {
  render() {
    return (
        <div className="aboutComponent">
          <div className="grid 1">
            <h3 className="smallBiz">Democratization of Small Business</h3>
            <p className="about-text">
              Creating and managing all the startup tasks for your business is a big hassle. Its complicated and confusing.  We make it simple and easy.  We are revolutionizing the way businesses are created, legal entities are managed and how dealing with all the “red-tape” of monthly and annual regulations is handled.
            </p>
            <br></br>
            <p className="about-text">
              ZenBusiness is a corporate entity creation and management company that is transforming the very business model of creating and managing corporate entities. By injecting technology and transparency into an industry that often lacks both, we’re creating a business creation experience that is friendly, fast, affordable and hassle free.  Unlike any other entity creation company we use technology to make it free for anyone to start a business.  We help people take the first steps in creating their dream companies and we believe that everyone deserves to be protected by this great law.
            </p>
          </div>
          <div id="carouselScroll" className="grid 2">
            <div id="price" className="carousel">
              <div className="carouselImgDiv">
                <img className="carouselImg" src={Price} alt=""></img>
              </div>
              <div className="carouselTextDiv">
                <h3 id="carouselHead" className="smallBiz">Price</h3>
                <p className="about-text">
                  Formation is free and everything else is just what you need to get a business up and running.  Not a bunch of money wasting crap that is not required or needed to get you started.   We sell products and services that save you money in the long run and keep you focused on the business and not worrying if your entity is legal.
                </p>
              </div>
            </div>
            <div id="platform" className="carousel">
              <div className="carouselImgDiv">
                <img className="carouselImg" src={Platform} alt=""></img>
              </div>
              <div className="carouselTextDiv">
                <h3 id="carouselHead" className="smallBiz">Platform</h3>
                <p className="about-text">
                  As a customer you get everything organized and securely stored on your personalized dashboard, and we are always just an email, chat or phone call away.  We use technology to save you money, build a better product, and deliver better service.
                </p>
              </div>
            </div>
            <div id="people" className="carousel">
              <div className="carouselImgDiv">
                <img className="carouselImg" src={People} alt=""></img>
              </div>
              <div className="carouselTextDiv">
                <h3 id="carouselHead" className="smallBiz">People</h3>
                <p className="about-text">
                  Most importantly we are a service company with highly skilled individuals that are with you from start to finish, year after year, supporting you and your business.
                </p>
              </div>
            </div>
          </div>
          <div className="grid 3">
            <h3 className="smallBiz">Entity Management Promise vs. Reality</h3>
            <p className="about-text">
              The corporate entity (LLC, C-Corp, S-Corp) is the foundation of American business, offering legal protection to owners. However, only 32% of American businesses operate as corporate entities today, leaving 7 out of 10 business owners at personal risk. The problem becomes more profound as the movement toward small business grows, driven by generational preferences and the continued rise of the sharing economy.on, a relationship-based approach and a modern business model to a market desperately in need of innovation. With ZenBusiness, entity management becomes as transparent, easy and efficient as logging into a business checking account. By removing the constant threat of falling into bad standing, ZenBusiness brings personal protection to millions of small business owners across the US.
            </p>
            <br></br>
            <p className="about-text">
              Unfortunately, creating and maintaining a corporate entity is extremely difficult due to antiquated government processes and systems, and small business owners have very few options today. Traditional entity management services are focused on larger businesses and are unable to provide the flexibility and online or mobile-first solutions that small businesses need. Online legal services take a one and done approach to filing legal paperwork with hidden fees and provide no support for managing a business on an ongoing basis once formed.
            </p>
            <br></br>
            <p className="about-text">
              ZenBusiness brings technical innovation, a relationship-based approach and a modern business model to a market desperately in need of innovation. With ZenBusiness, entity management becomes as transparent, easy and efficient as logging into a business checking account. By removing the constant threat of falling into bad standing, ZenBusiness brings personal protection to millions of small business owners across the US.
            </p>
          </div>

          <div id="tableScroll" className="grid 4">
            <table cellSpacing="0" cellPadding="0">
              <thead id="darkBlue">
                <tr>
                  <th></th>
                  <th>LLC</th>
                  <th>Corporation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td id="lightBlue">Placeholder</td>
                  <td id="lightFont">Minimal</td>
                  <td id="lightFont">Placeholder</td>
                </tr>
                <tr>
                  <td id="lightBlue">Record Keeping</td>
                  <td id="lightFont">Record Keeping</td>
                  <td id="lightFont">Record Keeping</td>
                </tr>
                <tr>
                  <td id="lightBlue">Liability</td>
                  <td id="lightFont">Limited liability for owners</td>
                  <td id="lightFont">Limited liability for owners</td>
                </tr>
                <tr>
                  <td id="lightBlue">Management</td>
                  <td id="lightFont">Flexible management for owners</td>
                  <td id="lightFont">Rigid structure</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="grid 5">
            <h3 className="smallBiz">Our Plan</h3>
            <p className="about-text">
              Our mission is to revolutionize how small business owners deal with all the red-tape, complexity and hassle of setting up a small business.
              We are revolutionizing the way businesses are created, legal entities are managed and how dealing with all the monthly and annual regulations and “red-tape” of staying in compliance with the government is handled by us.
            </p>
            <br></br>
            <br></br>
            <br></br>
            <h4 className="planSmHead">Good Standing Guarantee</h4>
            <p className="about-text">
              We keep you in compliance year after year. Once your business entity is created, we make sure that your company always stays in compliance.
            </p>
            <br></br>
            <h4 className="planSmHead">Single Dashboard</h4>
            <p className="about-text">
              We notify you when things are due, up for renewal, apprise you of any new laws and regulations, and we also keep all the documents organized on your Dashboard.
            </p>
            <br></br>
            <h4 className="planSmHead">WOW support</h4>
            <p className="about-text">
              We encourage our customers to call us anytime with anything they need. We will do our best to help them out and if it is more than a one off request, we will build it into the product for all of our customers. We want running a business to be about creating value for your customers and not dealing with the paperwork and hassle.
            </p>
            <br></br>
            <h4 className="planSmHead">Privacy Protections</h4>
            <p className="about-text">
              Many of our customers have asked that their personal information not show up in the public records. We include this service along with our Registered Agent service for an additional charge.
            </p>
          </div>
        </div>
    );
  }
}

export default App;
