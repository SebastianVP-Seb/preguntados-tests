import { addCorrectAnswers, addTotalQuestionsAction, addWrongAnswers, isCorrectAnswer } from '../../../src/actions/score.actions';
import { TYPES } from '../../../src/types/typesReducer';
import { storeMock } from '../store.mock';

describe('testing score actions ', () => {

  let store;
  beforeEach(() => {//antes de cada test
    store = storeMock();
  });

  test('isCorrectAnswer dispatch', () => {
    const isAnswerCorrectFalsy = false;
    const isAnswerCorrectTruthy = true;

    store.dispatch( isCorrectAnswer(isAnswerCorrectFalsy) );
    store.dispatch( isCorrectAnswer(isAnswerCorrectTruthy) );
    const [ actionCorrectAnswerFalsy, actionCorrectAnswerTruthy ] = store.getActions();

    //Las siguientes dos expresiones son equivalentes
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

  //Ejemplo Ricardo:
  test('total questions', ()=>{
    const totalQuestionsCount=8;
    store.dispatch(addTotalQuestionsAction(totalQuestionsCount));
    const actionCorrectAnswer=store.getActions()[0];
    // es igual a 
    // const [actionCorrectAnswer]=store.getActions();
    expect(actionCorrectAnswer).toMatchObject({type: TYPES.SCORE.TOTAL_QUESTION, payload: totalQuestionsCount});
  });

  test('testing addTotalQuestionsAction', () => {
    //la acción lleva un payload, por eso recibe a totalCorrectAnswers
    const totalCorrectAnswers = 0;
    store.dispatch(addTotalQuestionsAction(totalCorrectAnswers));
    //se hace así para evitar poner: getActions()[0], por el forEach definido en la parte superior
    const [ actionCorrectAnswer ] = store.getActions();
    expect(actionCorrectAnswer).toMatchObject({ type: TYPES.SCORE.TOTAL_QUESTION, payload: totalCorrectAnswers });
  });

  test('test addCorrectAnswers', () => {
    store.dispatch( addCorrectAnswers() )
    const [ actionAddcorrectAnswer ] = store.getActions();
    //la acción original tiene definida el type, por eso es .type
    expect(actionAddcorrectAnswer.type).toEqual(TYPES.SCORE.CORRECT_ANSWER);
  });

  test("test addWrongAnswers",() => {
    store.dispatch (addWrongAnswers());
    const [ actionAddWrongAnswer ] = store.getActions();
    expect(actionAddWrongAnswer.type).toEqual(TYPES.SCORE.WRONG_ANSWER);
  });
});
