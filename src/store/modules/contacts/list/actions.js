/** @format */

import {ACTION} from '../../../../constants';

import {CONTACTS_LIST_TYPE} from './constants';

export function loadMainContactsList() {
  return {
    type: ACTION.CONTACTS.LIST.LOAD.REQUEST,
    listType: CONTACTS_LIST_TYPE.MAIN,
  };
}
