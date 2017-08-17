/**
 * Created by Nova on 2017/3/13.
 */
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import dataActions from '../actions/data';
import commonActions from '../actions/common';
const actions = {...dataActions, ...commonActions};

import '../resource/css/data.css';

class DataDetail extends React.Component {
  componentWillMount() {
    this.props.actions.setNav('详细', true);
    this.props.actions.fetchDataDetail(this.props.params.id);
  }

  render() {
    const {detail, } = this.props;
    const item = detail.get('data');
    return (
      <div className="data-detail">
        <div dangerouslySetInnerHTML={{ __html: item.get('description') }} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  detail: state.getIn(['data', 'detail'])
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataDetail);