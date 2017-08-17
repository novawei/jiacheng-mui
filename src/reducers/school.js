import {fromJS} from 'immutable';
import * as actionType from '../actions/actionType';

const defaultState = fromJS({
	query: {
		page: 1,
		size: 20
	},
	list: {
		loading: false,
		data: [],
		error: null
	},
	detail: {
		loading: false,
		data: {},
		error: null
	}
});

function listReducer(state, action) {
  switch (action.type) {
    case actionType.S_LIST_LOADING:
      return state.setIn(['list', 'loading'], true);
    case actionType.S_LIST_SUCCESS:
      state = state.setIn(['list', 'loading'], false);
      state = state.setIn(['list', 'error'], null);
      if (action.meta.reload) {
        state = state.setIn(['query', 'page'], 1);
        state = state.setIn(['list', 'data'], fromJS(action.data));
      } else {
        state = state.updateIn(['query', 'page'], v => v+1);
        state = state.updateIn(['list', 'data'], v => v.concat(fromJS(action.data)));
      }
      return state;
    case actionType.S_LIST_FAILURE:
      return state.setIn(['list', 'error'], action.data);
    default:
      return state;
  }
}

function detailReducer(state, action) {
  switch (action.type) {
    case actionType.S_DETAIL_LOADING:
      return state.setIn(['detail', 'loading'], true);
    case actionType.S_DETAIL_SUCCESS:
      state = state.setIn(['detail', 'loading'], false);
      state = state.setIn(['detail', 'error'], null);
      state = state.setIn(['detail', 'data'], fromJS(action.data));
      return state;
    case actionType.S_DETAIL_FAILURE:
      return state.setIn(['detail', 'error'], action.data);
    default:
      return state;
  }
}

const school = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.S_LIST_LOADING:
    case actionType.S_LIST_SUCCESS:
    case actionType.S_LIST_FAILURE:
      return listReducer(state, action);

    case actionType.S_DETAIL_LOADING:
    case actionType.S_DETAIL_SUCCESS:
    case actionType.S_DETAIL_FAILURE:
      return detailReducer(state, action);

    default:
      return state;
  }
}

export default school;