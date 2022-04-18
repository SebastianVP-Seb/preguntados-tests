import { TYPES } from '../types/typesReducer';

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

