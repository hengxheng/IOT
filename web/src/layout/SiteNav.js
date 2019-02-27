import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
// import { MenuItem,Button,Menu }  from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';


export default class SiteNav extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render(){
    const { anchorEl } = this.state;
    return (
      <nav>
        <Button
            aria-owns={anchorEl ? 'simple-menu' : null}
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            <MenuIcon/>
        </Button>
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}><Link to='/'>Home</Link></MenuItem>
          <MenuItem onClick={this.handleClose}><Link to='/led'>LED</Link></MenuItem>
          <MenuItem onClick={this.handleClose}><Link to='/devices'>Devices</Link></MenuItem>
        </Menu>
    </nav>
    )
  }
}
