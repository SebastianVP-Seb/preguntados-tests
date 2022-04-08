const { TYPES } = require("../types/typesReducer");

export const addTotalQuestionsAction = (totalQuestions) => ({
  type: TYPES.SCORE.TOTAL_QUESTION,
  payload: totalQuestions
});

export const addCorrectAnswers = () => ({
  type: TYPES.SCORE.CORRECT_ANSWER
});

export const addWrongAnswers = ()=>({
  type: TYPES.SCORE.WRONG_ANSWER
});

