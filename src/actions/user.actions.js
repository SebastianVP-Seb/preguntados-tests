import { v4 as uuid } from 'uuid';
import { TYPES } from '../types/typesReducer';

export const userLoginAction2 = ({ name }) => dispatch => {
  const payload = {
    id: uuid(),
    name,
    start: new Date().getTime()
  }
  dispatch(userLogginAction(payload));
}

export const userLoggOutAction2 = () => dispatch => {
  dispatch(userLoggOutAction())
};

export const userLogginAction = (payload) => ({ type: TYPES.USER.LOGGIN, payload });

export const userLoggOutAction = () => ({
  type: TYPES.USER.LOGOUT,
});

