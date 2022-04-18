import { addCorrectAnswers, addTotalQuestionsAction, addWrongAnswers, isCorrectAnswer } from '../../../src/actions/score.actions';
import { TYPES } from '../../../src/types/typesReducer';
import { storeMock } from '../store.mock';

describe('testing score actions ', () => {

  let store;
  beforeEach(() => {
    store = storeMock();
  })

  test('isCorrectAnswer dispatch', () => {
    const isAnswerCorrectFalsy = false;
    const isAnswerCorrectTruthy = true;

    store.dispatch( isCorrectAnswer(isAnswerCorrectFalsy) );
    store.dispatch( isCorrectAnswer(isAnswerCorrectTruthy) );
    const [ actionCorrectAnswerFalsy, actionCorrectAnswerTruthy ] = store.getActions();

    expect(actionCorrectAnswerFalsy.type).toEqual(TYPES.SCORE.WRONG_ANSWER);
    expect(actionCorrectAnswerFalsy).toMatchObject({ type: TYPES.SCORE.WRONG_ANSWER });

    expect(actionCorrectAnswerTruthy.type).toEqual(TYPES.SCORE.CORRECT_ANSWER);
    expect(actionCorrectAnswerTruthy).toMatchObject({ type: TYPES.SCORE.CORRECT_ANSWER });

    //TODO: este test tendria que pasar o no, y si no por que?
    // expect({
    //   ...scoreReducer,
    //   correctAnswers: scoreReducer.correctAnswers + 1
    // }).toMatchObject(newStateScore);

  });

  test('testing addTotalQuestionsAction', () => {
    const totalCorrectAnswers = 0;

    store.dispatch(
      addTotalQuestionsAction(totalCorrectAnswers)
    );
    const [ actionCorrectAnswer ] = store.getActions();
    expect(actionCorrectAnswer).toMatchObject({ type: TYPES.SCORE.TOTAL_QUESTION, payload: totalCorrectAnswers });

  });

  test('test addCorrectAnswers', () => {
    store.dispatch( addCorrectAnswers() )

    const [ actionAddcorrectAnswer ] = store.getActions();
    expect(actionAddcorrectAnswer.type).toEqual(TYPES.SCORE.CORRECT_ANSWER);

  });

  test("test addWrongAnswers",() => {
    store.dispatch (addWrongAnswers());
    const [ actionAddWrongAnswer ] = store.getActions();
    expect(actionAddWrongAnswer.type).toEqual(TYPES.SCORE.WRONG_ANSWER);
  })

})


