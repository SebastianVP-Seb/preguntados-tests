
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialStateStoreMock } from './initial-state.mock';

const middleware = [ thunk ];
const mockStoreConfiguration = configureStore(middleware);

export const storeMock = (initialState = initialStateStoreMock) => mockStoreConfiguration(initialState);

