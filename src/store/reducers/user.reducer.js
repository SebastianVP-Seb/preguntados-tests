import { TYPES } from "../../types/typesReducer";

const initialState = {
  id: '',
  name: '',
  start: ''
};

export const userReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case TYPES.USER.LOGGIN:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        start: action.payload.start,
      }
    case TYPES.USER.LOGOUT:
      return initialState;
    default:
      return state;
  };
};

