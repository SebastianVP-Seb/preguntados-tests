import { TYPES } from "../types/typesReducer"
import { mountQuestionByIndex } from "./questionSelectActtion"
import { addTotalQuestionsAction } from "./score.actions"

export const getQuestions = () => dispatch => {
  return fetch('https://625448d019bc53e2347bf24d.mockapi.io/api/questions/questions_data')
    .then(resolve => resolve.json())
    .then(([{ data }]) => {
      dispatch(setQuestionsAction(data));
      dispatch(addTotalQuestionsAction(data.length));
      dispatch(mountQuestionByIndex(0));
    })
    .catch();
}

// Sigtaru for Reducer
const setQuestionsAction = (questions) => ({
  type: TYPES.QUESTIONS.ADD,
  payload: questions
})
