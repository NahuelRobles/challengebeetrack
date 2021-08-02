/** @format */

import {CONTACTS_LIST_TYPE} from './constants';

export const contactsListSelector = listType => state =>
  state.contacts.list[listType];

export const mainContactsListSelector = contactsListSelector(
  CONTACTS_LIST_TYPE.MAIN,
);
