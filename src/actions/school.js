import * as actionType from './actionType';

function setListLoading() {
	return {
		type: actionType.S_LIST_LOADING
	}
}

function loadListSuccess(data, reload) {
	return {
		type: actionType.S_LIST_SUCCESS,
		data: data,
		meta: {
			reload: reload
		}
	}
}

function loadListFailure(error) {
	return {
		type: actionType.S_LIST_FAILURE,
		data: error
	}
}

const fetchSchoolList = (query, reload) => dispatch => {
	dispatch(setListLoading());
	const url = 'http://10.50.200.45:3001/schools';
	fetch(url)
		.then(resp => resp.json())
		.then(data => {
			dispatch(loadListSuccess(data, reload));
		})
		.catch(error => {
			dispatch(loadListFailure(error));
		});
};

function setDetailLoading() {
  return {
    type: actionType.S_DETAIL_LOADING
  }
}

function loadDetailSuccess(data) {
  return {
    type: actionType.S_DETAIL_SUCCESS,
    data: data
  }
}

function loadDetailFailure(error) {
  return {
    type: actionType.S_DETAIL_FAILURE,
    data: error
  }
}

const fetchSchoolDetail = (query) => dispatch => {
  dispatch(setDetailLoading());
  const url = `http://10.50.200.45:3001/schools/${query}`;
  fetch(url)
    .then(resp => resp.json())
    .then(data => {
      dispatch(loadDetailSuccess(data));
    })
    .catch(error => {
      dispatch(loadDetailFailure(error));
    });
};

export default {
	fetchSchoolList,
	fetchSchoolDetail
}