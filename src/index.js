/** @format */

import React, {memo} from 'react';
import {StoreContext} from 'redux-react-hook';

import {Screens} from './screens';
import {store} from './store';

export const App = memo(() => {
  return (
    <StoreContext.Provider value={store}>
      <Screens />
    </StoreContext.Provider>
  );
});
