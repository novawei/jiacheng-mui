import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import schoolActions from '../actions/school';
import commonActions from '../actions/common';
const actions = {...schoolActions, ...commonActions};

import SchoolItem from '../components/SchoolItem';

class SchoolList extends React.Component {
	
	componentWillMount() {
		this.props.actions.setNav('驾校推荐', false);
		const {query, } = this.props;
		this.props.actions.fetchSchoolList(query, true);
	}

	handleClick(item) {
    const path = `/schools/${item.get('id')}`;
    this.props.router.push(path);
	}

	render() {
		const {list, } = this.props;
		const items = list.get('data');
		return (
			<div>
				{items.map(item =>
					<SchoolItem key={item.get('id')} item={item} onClick={() => this.handleClick(item)}/>
				)}
			</div>
		)
	}

}

const mapStateToProps = state => ({
	query: state.getIn(['school', 'query']),
	list: state.getIn(['school', 'list'])
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SchoolList);

