/**
 * Created by Nova on 2017/3/13.
 */
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import schoolActions from '../actions/school';
import commonActions from '../actions/common';
const actions = {...schoolActions, ...commonActions};

import '../resource/css/school.css';

class SchoolDetail extends React.Component {
  componentWillMount() {
    this.props.actions.setNav('驾校详细', true);
    this.props.actions.fetchSchoolDetail(this.props.params.id);
  }

  render() {
    const {detail, } = this.props;
    const item = detail.get('data');
    return (
      <div className="school-detail">
        <h3>{item.get('name')}</h3>
        <div>
          通过率：{item.get('tgRate')}
        </div>
        <div>
          {item.get('address')}
        </div>
        <div dangerouslySetInnerHTML={{__html: item.get('description')}} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  detail: state.getIn(['school', 'detail'])
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SchoolDetail);