/**
 * Created by Nova on 2017/3/13.
 */
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import dataActions from '../actions/data';
import commonActions from '../actions/common';
const actions = {...dataActions, ...commonActions};

import DataItem from '../components/DataItem';

class DataList extends React.Component {

  componentWillMount() {
    this.props.actions.setNav('驾考宝典', false);
    const {query, } = this.props;
    this.props.actions.fetchDataList(query, true);
  }

  handleClick(item) {
    const path = `/data/${item.get('id')}`;
    this.props.router.push(path);
  }

  render() {
    const {list, } = this.props;
    const items = list.get('data');
    return (
      <div>
        {items.map(item =>
          <DataItem key={item.get('id')} item={item} onClick={() => this.handleClick(item)}/>
        )}
      </div>
    )
  }

}

const mapStateToProps = state => ({
  query: state.getIn(['data', 'query']),
  list: state.getIn(['data', 'list'])
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataList);

