/**
 * Created by Nova on 2017/3/13.
 */
import {fromJS} from 'immutable';
import * as actionType from '../actions/actionType';

const defaultState = fromJS({
  tab: {
    selectedIndex: 0
  },
  nav: {
    title: '驾程',
    showBack: false
  }
});

const common = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.C_TAB_SEL_IDX:
      return state.setIn(['tab', 'selectedIndex'], action.data);
    case actionType.C_NAV_SETTING:
      return state.merge({nav: action.data});
    default:
      return state;
  }
};

export default common;