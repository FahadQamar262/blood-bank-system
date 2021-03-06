import React, { Component , PropTypes} from 'react';
import './Navigation.css';
import * as MUI from 'material-ui'
import {Link} from 'react-router';
import Avatar from 'material-ui/Avatar';
import Assessment from 'material-ui/svg-icons/action/assessment';
import Web from 'material-ui/svg-icons/av/web';

class Navigation extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  drawerMenu(){
    return (
      <div>
          <div className="navigation-avatar-div">
            <Avatar src="http://www.material-ui.com/images/uxceo-128.jpg"
                    size={50}
                    className="navigation-icon"/>
            <span className="navigation-span">Hello World</span>
          </div>
          <MUI.MenuItem
              className="navigation-menuItem"
              primaryText="Dashboard"
              leftIcon={<Assessment/>}
              containerElement={<Link to="/dashboard"/>}
            />
          <MUI.MenuItem
              className="navigation-menuItem"
              primaryText="Register as Doner"
              leftIcon={<Web/>}
              containerElement={<Link to="/dashboard/registerDonor"/>}
            />
          <MUI.MenuItem
            className="navigation-menuItem"
            primaryText="Doners"
            leftIcon={<Web/>}
            containerElement={<Link to="/dashboard/donorlist"/>}
          />
      </div>
    );
  }

  render() {
    return (
      <div className="navigation-container">
        <MUI.AppBar style={this.props.styles} title="Title"
              onLeftIconButtonTouchTap={this.props.drawerToggle}
              iconElementRight={<MUI.FlatButton label="Sign out" />}
              onRightIconButtonTouchTap={()=>this.context.router.push("/login")}
              />
        <MUI.Drawer open={this.props.drawerOpen} docked={false}
            onRequestChange={this.props.drawerToggle}>
          {this.drawerMenu()}
        </MUI.Drawer>
      </div>
    );
  }
}

export default Navigation;
