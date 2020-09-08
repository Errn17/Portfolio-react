import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className='contact-body'>
        <Grid className='contact-grid'>
          <Cell col={6}>
            <h2>Aaron Howard</h2>
            <img
              src='https://github.com/Errn17/Portfolio/blob/master/pics/me-cali.JPG?raw=true'
              alt='avatar'
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              What's up! My name's Aaron, I'm 22 years old and I love cars! I'm
              definitely a dog kinda guy, but I've always had a cat or two in my
              house. Currently taking on the Web Dev Full Stack bootcamp through
              Denver University! Look forward to adding more projects to this
              portfolio! Best way to contact me is by email or hit me up on
              LinkedIn. Feel free to look at my GitHub to see my current repos.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className='contact-list'>
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}>
                    <i className='fa fa-envelope' aria-hidden='true' />
                    aaronkh19@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}>
                    <i className='fa fa-linkedin-square' aria-hidden='true' />
                    LinkedIn
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
