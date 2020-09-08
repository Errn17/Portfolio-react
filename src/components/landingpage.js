import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <img
              src='https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/69958797_2605312069695965_642325634860711936_n.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=2FRrBiKISAUAX8zGgb7&_nc_ht=scontent.fapa1-1.fna&oh=84931c2414261cb263c08b43309e37e1&oe=5F7C05F5'
              alt='avatar'
              className='avatar-img'
            />

            <div className='banner-text'>
              <h1>Full Stack Web developer</h1>

              <hr />

              <p>
                HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express |
                MongoDB | SQL
              </p>

              <div className='social-links'>
                {/* LinkedIn */}
                <a
                  href='https://www.linkedin.com/in/aaron-howard-2764bb1a8/'
                  rel='noopener noreferrer'
                  target='_blank'>
                  <i className='fa fa-linkedin-square' aria-hidden='true' />
                </a>

                {/* Github */}
                <a
                  href='https://github.com/Errn17'
                  rel='noopener noreferrer'
                  target='_blank'>
                  <i className='fa fa-github-square' aria-hidden='true' />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
