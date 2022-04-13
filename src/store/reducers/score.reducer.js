import { TYPES } from "../../types/typesReducer";

const initialState = {
  totalPoints: 0, //total de puntos, ya con penalizacion de tiempo
  wrongAnswers: 0, //total de preguntas no contestadas correctamente
  correctAnswers: 0, //total de preguntas contestadas correctamente
  totalQuestions: 0, //total de preguntas por contestar
};

// 60 seg = 1pt
// 30 seg = .5pt

export const scoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SCORE.TOTAL_QUESTION:
      return {
        ...state,
        totalQuestions: action.payload
      }
    case TYPES.SCORE.CORRECT_ANSWER:
      return {
        ...state,
        correctAnswers: state.correctAnswers + 1
      }
    case TYPES.SCORE.WRONG_ANSWER:
      return {
        ...state,
        wrongAnswers: state.wrongAnswers + 1
      }
    default:
      return state;
  };
};

