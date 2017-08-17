/**
 * Created by Nova on 2017/3/13.
 */
import * as actionType from './actionType';

function setListLoading() {
  return {
    type: actionType.D_LIST_LOADING
  }
}

function loadListSuccess(data, reload) {
  return {
    type: actionType.D_LIST_SUCCESS,
    data: data,
    meta: {
      reload: reload
    }
  }
}

function loadListFailure(error) {
  return {
    type: actionType.D_LIST_FAILURE,
    data: error
  }
}

const fetchDataList = (query, reload) => dispatch => {
  dispatch(setListLoading());
  const url = 'http://10.50.200.45:3001/data';
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
    type: actionType.D_DETAIL_LOADING
  }
}

function loadDetailSuccess(data) {
  return {
    type: actionType.D_DETAIL_SUCCESS,
    data: data
  }
}

function loadDetailFailure(error) {
  return {
    type: actionType.D_DETAIL_FAILURE,
    data: error
  }
}

const fetchDataDetail = (query) => dispatch => {
  dispatch(setDetailLoading());
  const url = `http://10.50.200.45:3001/data/${query}`;
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
  fetchDataList,
  fetchDataDetail
}