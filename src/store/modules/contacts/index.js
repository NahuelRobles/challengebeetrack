/** @format */

import {combineReducers} from 'redux';
import {spawn} from 'redux-saga/effects';
import {enableES5} from 'immer';
enableES5();

import {contactsListReducer, contactsListSaga} from './list';

export const contactsReducer = combineReducers({
  list: contactsListReducer,
});

export function* contactsSaga() {
  yield spawn(contactsListSaga);
}

export * from './list/actions';
export * from './list/selectors';
