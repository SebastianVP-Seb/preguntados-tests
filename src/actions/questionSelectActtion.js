import { TYPES } from '../types/typesReducer';
import { questions } from '../utils/questions.mock';

export const mountQuestionByIndex = index => ( dispatch, getState ) => {
  const { questionsReducer, userReducer } = getState();
  if ( userReducer.id ) {
    dispatch(questionSelectAction(questionsReducer[index]))
  }
}


export const questionSelectAction=(payload)=>({
  type: TYPES.ANSWER_SELECT.MOUNT,
  payload
});

