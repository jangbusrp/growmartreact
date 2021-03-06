import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { usersReducer } from './Reducers/UserReducers';
import { productsReducer } from './Reducers/ProductReducers';
import { OrderReducer } from './Reducers/OrderReducer';

const reducer = combineReducers({
  user: usersReducer,
  product: productsReducer,
  order: OrderReducer,
});

const adminInfoFromStorage = localStorage.getItem('adminInfo')
  ? JSON.parse(localStorage.getItem('adminInfo'))
  : null;

const initialState = {
  user: {
    admin: {
      adminInfo: adminInfoFromStorage,
    },
  },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
