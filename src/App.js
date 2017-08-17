import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import TabBar from './components/TabBar';
import NavBar from './components/NavBar';
import './resource/css/app.css';
import actions from './actions/common';

const tabRouters = [
	'/schools',
	'/data',
	'/my'
];

class App extends React.Component {
	constructor() {
		super();
		this.handleBack = this.handleBack.bind(this);
		this.handleSelectIndex = this.handleSelectIndex.bind(this);
	}

	handleBack(event) {
		event.preventDefault();
		this.props.router.pop();
	}

	handleSelectIndex(index) {
		this.props.actions.setTabIdx(index);
		const path = (index < tabRouters.length) ? tabRouters[index] : '/';
		this.props.router.push(path);
	}

  render() {
  	const {nav, tab} = this.props;
    return (
    	<div>
				<div className='container'>
          {this.props.children}
				</div>
				<div className='navbar'>
					<NavBar title={nav.get('title')} showBack={nav.get('showBack')} onBackClick={this.handleBack}/>
				</div>
				<div className='tabbar'>
					<TabBar selectedIndex={tab.get('selectedIndex')} onSelectIndex={this.handleSelectIndex}/>
				</div>
			</div>
    )
  }
}

const mapStateToProps = state => ({
  nav: state.getIn(['common', 'nav']),
  tab: state.getIn(['common', 'tab'])
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
