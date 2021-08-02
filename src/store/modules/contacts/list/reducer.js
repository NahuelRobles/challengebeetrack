/** @format */

import produce from 'immer';
import {enableES5} from 'immer';
enableES5();

import {ACTION} from '../../../../constants';

import {CONTACTS_LIST_TYPE} from './constants';

export const emptyListState = {
  isLoading: true,
  error: null,
  list: [],
};

const initialState = {
  [CONTACTS_LIST_TYPE.MAIN]: {...emptyListState},
};

export const contactsListReducer = (state = initialState, action) => {
  return produce(state, draft => {
    const {listType} = action;
    const currentListData = draft[listType];

    switch (action.type) {
      case ACTION.CONTACTS.LIST.LOAD.REQUEST: {
        draft[listType] = {
          ...currentListData,
          isLoading: true,
          error: null,
          list: [],
        };
        return;
      }
      case ACTION.CONTACTS.LIST.LOAD.SUCCESS: {
        const {data} = action;
        draft[listType] = {
          ...currentListData,
          isLoading: false,
          list: data,
        };
        return;
      }

      case ACTION.CONTACTS.LIST.LOAD.FAILURE: {
        draft[listType] = {
          ...draft[listType],
          isLoading: false,
          error: 'Error',
        };
        return;
      }

      default: {
        return state;
      }
    }
  });
};
