import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { rootReducers } from './rootReducer';

const configureStore = () => {

  const isDevelopment = process.env.ENVIROMENT === 'development';

  const middleware = [thunk];
  const middlewareEnhacer = applyMiddleware(...middleware);
  const enhacers = [ middlewareEnhacer ];

  const composeEnchancers = isDevelopment ? composeWithDevTools(...enhacers) : compose(...enhacers);
  return createStore(rootReducers, composeEnchancers);
}

const store = configureStore();

export default store ;

