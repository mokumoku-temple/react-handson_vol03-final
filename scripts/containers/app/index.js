import React, { Component } from 'react';
import { Link } from 'react-router';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class List extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
    };
  }

  onMenuStateChange(showMenu) {
    this.setState({ showMenu });
  }

  render() {
    return (
      <div>
        <AppBar
          title="React HandsOn vol.03"
          onLeftIconButtonTouchTap={() => this.onMenuStateChange(true)}
        />

        <Drawer
          docked={false}
          open={this.state.showMenu}
          width={200}
          onRequestChange={show => this.onMenuStateChange(show)}
        >
          <Link to="/"><MenuItem>Home</MenuItem></Link>
          <Link to="/list"><MenuItem>List</MenuItem></Link>
        </Drawer>

        {this.props.children}
      </div>
    );
  }
}
