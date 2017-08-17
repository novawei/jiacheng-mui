import React from 'react';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavBack from 'material-ui/svg-icons/navigation/chevron-left';

class NavBar extends React.Component {
  render() {
    return (
      <AppBar title={this.props.title}
              iconElementLeft={<IconButton><NavBack/></IconButton>}
              onLeftIconButtonTouchTap={this.props.onBackClick}
    					showMenuIconButton={false}
    					zDepth={1}
    					/>
    );
  }
}

export default NavBar;
