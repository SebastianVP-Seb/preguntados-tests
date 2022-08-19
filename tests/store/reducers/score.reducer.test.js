import { scoreReducer } from '../../../src/store/reducers/score.reducer';
import {addCorrectAnswers, addTotalQuestionsAction, addWrongAnswers} from '../../../src/actions/score.actions';
import { scoreReducer as fakeScoreReducer } from '../initial-state.mock';

describe('test de score.reducer', () => {

  // const initialState={  esta inicialización es lo mismo que el fakeScoreReducer
  //   totalPoints: 0, 
  //   wrongAnswers: 0, 
  //   correctAnswers: 0, 
  //   totalQuestions: 0, 
  // };

  test('TYPES.SCORE.TOTAL_QUESTION', () => {
    //Mi intento
    // const action=addTotalQuestionsAction(fakeScoreReducer);
    // const newState=scoreReducer(fakeScoreReducer, action.payload);
    // console.log(newState);
    // console.log(action.payload);
    // expect(newState).toEqual(action.payload);
    const totalQuestions=7; // = action.payload
    const action=addTotalQuestionsAction(totalQuestions);
    const newState=scoreReducer(fakeScoreReducer, action);
    expect(newState.totalQuestions).toStrictEqual(action.payload);
    expect(newState).toStrictEqual({...fakeScoreReducer, totalQuestions});
  });

  test('TYPES.SCORE.CORRECT_ANSWER', ()=>{
    //FUNCIONA:
    // const correctAnswers=1;
    // const action=addCorrectAnswers(correctAnswers);
    // const newState=scoreReducer(fakeScoreReducer, action);
    // // expect(newState.correctAnswers).toStrictEqual(action.payload);
    // expect(newState).toStrictEqual({...fakeScoreReducer, correctAnswers});

    //CLASE:
    //se cmprueba que funcione con cualquier número
    const action=addCorrectAnswers();
    const fakeScore={
      ...fakeScoreReducer, correctAnswers: 7
    };
    const newState=scoreReducer(fakeScore, action);
    expect(newState).toStrictEqual({...fakeScore, correctAnswers: fakeScore.correctAnswers +1});
  });

  test('TYPES.SCORE.WRONG_ANSWER', ()=>{
    const action=addWrongAnswers();
    const fakeScore={
      ...fakeScoreReducer, wrongAnswers: 5
    };
    const newState=scoreReducer(fakeScore, action);
    expect(newState).toStrictEqual({...fakeScore, wrongAnswers: fakeScore.wrongAnswers+1});
  });

  //default. payload falso
  test('default case, score reducer', ()=>{
    const action={type: 'action defaul', payload: {}};
    const newState=scoreReducer(fakeScoreReducer, action);
    expect(newState).not.toEqual(action.payload);
  });

  //inicialización a través de props
  test('verifica que se retorne el estado inicial', ()=>{
    const action={type: 'state undefined', payload: {}};
    const newState=scoreReducer(undefined, action);
    // expect(newState).toStrictEqual({});  esto no
    // expect(newState).toStrictEqual(fakeScoreReducer);
    expect(newState).toStrictEqual({
      totalPoints: 0,
      wrongAnswers: 0,
      correctAnswers: 0,
      totalQuestions: 0,
    });
  });
});
