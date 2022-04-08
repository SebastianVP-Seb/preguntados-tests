import { TYPES } from "../../types/typesReducer";

// {
//   questionId: 'Q-01',
//   isCorrect: true,
//   answerSelect: 2,
//   responseTime: '53s',
//   point: .7,
// }
const initialState = [];

export const answersReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case TYPES.ANSWERS.ADD:
      return [...state, action.payload];
    default:
      return state;
  };
};

