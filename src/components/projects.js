import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover",
            }}>
            React Project 3
          </CardTitle>
          <CardText>Coming soon..</CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Demo</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name='share'></IconButton>
          </CardMenu>
        </Card>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#000000",
              height: "176px",
              background:
                "url(https://images.creativemarket.com/0.1.0/ps/5588184/300/200/m2/fpnw/wm0/511-.jpg?1545240045&s=7ecbeb09cbc5a0b65854f41f5ce6d0bb) center / cover",
            }}>
            Burger App
          </CardTitle>
          <CardText>
            Node/Express Handlebars based application. Checkout my repo for the
            code, also hit the demo link for a functioning app
          </CardText>
          <CardActions border>
            <Button
              href='https://github.com/Errn17/burger'
              target='_blank'
              colored>
              Github
            </Button>
            <Button
              href='https://infinite-garden-65417.herokuapp.com/'
              target='_blank'
              colored>
              Demo
            </Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name='share'></IconButton>
          </CardMenu>
        </Card>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is NodeJS</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is HTML/CSS</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className='category-tabs'>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple>
          <Tab>React</Tab>
          <Tab>Express</Tab>
          <Tab>NodeJS</Tab>
          <Tab>HTML/CSS</Tab>
        </Tabs>

        <section className='projects-grid'>
          <Grid className='projects-grid'>
            <Cell col={12}>
              <div className='content'>{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Projects;
