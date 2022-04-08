import { createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducers } from './rootReducer';

const configureStore = () => {
  const composeEnchancers = composeWithDevTools();
  return createStore(rootReducers, composeEnchancers);
}

const store = configureStore();

export default store ;

