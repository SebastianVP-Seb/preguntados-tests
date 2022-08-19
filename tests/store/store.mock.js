
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialStateStoreMock } from './initial-state.mock';

const middleware = [ thunk ];
const mockStoreConfiguration = configureStore(middleware);

//si no se inicializa directamente se inicializa con initialStateStoreMock
export const storeMock = (initialState = initialStateStoreMock) => mockStoreConfiguration(initialState);

