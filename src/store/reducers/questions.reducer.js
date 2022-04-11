import { TYPES } from "../../types/typesReducer";
import { questions as initialState } from "../../utils/questions.mock";

export const questionsReducer = ( state = [], action ) => {
  switch (action.type) {
    case TYPES.QUESTIONS.ADD:
      return action.payload
    default:
      return state;
  };
};

