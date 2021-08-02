/** @format */

import {takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';

import {ACTION} from '../../../../constants';

function* contactsListRequest() {
  return yield axios({
    params: {
      results: 30,
    },
    url: 'https://randomuser.me/api/',
  });
}

function* loadContactsList(action) {
  const {listType} = action;
  try {
    const response = yield contactsListRequest();
    yield put({
      type: ACTION.CONTACTS.LIST.LOAD.SUCCESS,
      listType,
      data: response.data.results,
    });
  } catch (error) {
    yield put({type: ACTION.CONTACTS.LIST.LOAD.FAILURE, listType, error});
  }
}

export function* contactsListSaga() {
  yield takeEvery(ACTION.CONTACTS.LIST.LOAD.REQUEST, loadContactsList);
}
