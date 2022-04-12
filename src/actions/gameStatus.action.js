import { TYPES } from "../types/typesReducer"

export const setCurrentQuestionIndex = (index) => {
  return {
    type: TYPES.GAME_STATUS.SET_CURRENT_QUESTION_INDEX,
    payload: { index },
  };
};
