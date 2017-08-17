/**
 * Created by Nova on 2017/3/13.
 */
import * as actionType from './actionType';

function setTabIdx(selectedIdx) {
  return {
    type: actionType.C_TAB_SEL_IDX,
    data: selectedIdx
  }
}

function setNav(title, showBack=false) {
  return {
    type: actionType.C_NAV_SETTING,
    data: {
      title: title,
      showBack: showBack
    }
  }
}

export default {
  setTabIdx,
  setNav
}