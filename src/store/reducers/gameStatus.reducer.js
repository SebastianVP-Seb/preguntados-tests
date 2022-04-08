import { TYPES } from '../../types/typesReducer';

const initialState = {
  currentQuestionIndex: 0
};

export const gameStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GAME_STATUS.SET_CURRENT_QUESTION_INDEX:
      return { ...state, currentQuestionIndex: action.payload.index };
    default:
      return state;
  };
};
