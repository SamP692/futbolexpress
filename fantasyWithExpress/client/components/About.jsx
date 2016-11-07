import React, { Component } from 'react';

class About extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div className="header">
          <h1>Why Futbol Express</h1>
          <hr />
        </div>
        <div className="content">
          <h2>Closed Player Pool</h2>
          <p>
            >Futbol express is the only fantasy soccer platform featuring a closer player pool,
            with no two teams in one league owning the same player<br />
            >Compete like never before with transfer fees and player swaps<br />
            >Put your soccer knowledge to the test with intense drafts
          </p>
        </div>
        <div className="content">
          <h2>Comprehensive Statistics</h2>
          <p>
            >Release the shackles that limit player points to goals or assits<br />
            >Passing and defense become necessary to the success of your team<br />
            >A flexible points library that includes important influencial
            statistics such as tackle, key passes, headers, and many more
          </p>
        </div>
      </div>
    );
  }
}

export default About;
