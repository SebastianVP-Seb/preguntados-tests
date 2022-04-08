import { TYPES } from "../types/typesReducer"

export const addAnswer = (
  questionId,
  isCorrect,
  answerSelect,
  responseTime,
  point
) => {
  return {
    type: TYPES.ANSWERS.ADD,
    payload: {
      questionId,
      isCorrect,
      answerSelect,
      responseTime,
      point
    }
  }
}