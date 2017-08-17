/**
 * Created by Nova on 2017/3/13.
 */
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import actions from '../actions/common';

import {List, ListItem} from 'material-ui/List';
import IconFeedback from 'material-ui/svg-icons/communication/comment';
import IconCode from 'material-ui/svg-icons/navigation/apps';
import IconEnroll from 'material-ui/svg-icons/notification/event-available';
import IconMyStudent from 'material-ui/svg-icons/action/supervisor-account';
import IconSetting from 'material-ui/svg-icons/action/settings';
import Divider from 'material-ui/Divider';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

import {orange900, green900, amber700, red900, cyan700} from 'material-ui/styles/colors';

class My extends React.Component {

  componentWillMount() {
    this.props.actions.setNav('我的驾程', false);
  }

  render() {
    return (
      <div>
        <List>
          <Divider />
          <ListItem primaryText="意见反馈" leftIcon={<IconFeedback color={orange900} />} rightIcon={<ChevronRight/>}/>
          <Divider inset={true} />
          <ListItem primaryText="二维码" leftIcon={<IconCode color={green900} />} rightIcon={<ChevronRight/>}/>
          <Divider inset={true} />
          <ListItem primaryText="我的报名" leftIcon={<IconEnroll color={amber700} />} rightIcon={<ChevronRight/>} />
          <Divider inset={true} />
          <ListItem primaryText="我的学员" leftIcon={<IconMyStudent color={red900} />} rightIcon={<ChevronRight/>} />
          <Divider inset={true} />
          <ListItem primaryText="设置" leftIcon={<IconSetting color={cyan700} />} rightIcon={<ChevronRight/>} />
          <Divider />
        </List>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  common: state.getIn(['common'])
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(My);