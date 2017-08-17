import React from 'react';

import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconCar from 'material-ui/svg-icons/maps/local-taxi';
import IconBook from 'material-ui/svg-icons/action/book';
import IconUser from 'material-ui/svg-icons/social/person';


const carIcon = <IconCar />;
const bookIcon = <IconBook />
const userIcon = <IconUser />;

class TabBar extends React.Component {
  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.props.selectedIndex}>
          <BottomNavigationItem
            label="学车"
            icon={carIcon}
            onTouchTap={() => this.props.onSelectIndex(0)}
          />
          <BottomNavigationItem
            label="驾典"
            icon={bookIcon}
            onTouchTap={() => this.props.onSelectIndex(1)}
          />
          <BottomNavigationItem
            label="我的"
            icon={userIcon}
            onTouchTap={() => this.props.onSelectIndex(2)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default TabBar;