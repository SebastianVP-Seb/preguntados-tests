import { TYPES } from "../types/typesReducer"
import { mountQuestionByIndex } from "./questionSelectActtion"
import { addTotalQuestionsAction } from "./score.actions"

export const getQuestions = () => dispatch => {

  const URL = process.env.HOST_BACKEND;

  return fetch(`${URL}/api/questions`)
    .then(resolve => resolve.json())
    .then(({ data }) => {
      dispatch(setQuestionsAction(data));
      dispatch(addTotalQuestionsAction(data.length));
      dispatch(mountQuestionByIndex(0));
    })
    .catch();
}

// Signature for Reducer
const setQuestionsAction = (questions) => ({
  type: TYPES.QUESTIONS.ADD,
  payload: questions
})
