/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers } from 'redux';

import reducers from '../reducers/index';

const store = createStore(
  combineReducers({
    reducers,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
