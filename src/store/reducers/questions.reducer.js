import { questions as initialState } from "../../utils/questions.mock";

export const questionsReducer = ( state = initialState, action ) => {
  switch (action.type) {

    default:
      return state;
  };
};

