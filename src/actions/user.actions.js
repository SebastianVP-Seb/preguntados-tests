import { v4 as uuid } from 'uuid';
import { TYPES } from '../types/typesReducer';

export const userLogginAction = ({ name }) => ({
  type: TYPES.USER.LOGGIN,
  payload: {
    id: uuid(),
    name,
    start: new Date().getTime()
  }
});

export const userLoggOutAction = () => ({
  type: TYPES.USER.LOGOUT,
});

