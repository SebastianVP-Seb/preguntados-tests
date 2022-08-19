import { setCurrentQuestionIndex } from '../../../src/actions/gameStatus.action';
import { gameStatusReducer } from '../../../src/store/reducers/gameStatus.reducer';
import {gameStatusReducer as fakeGameStatusReducer} from '../initial-state.mock';

describe('testing de gameStatusReducer', ()=>{

    test('TYPES.GAME_STATUS.SET_CURRENT_QUESTION_INDEX', ()=>{
        const index=1;
        const action=setCurrentQuestionIndex(index);
        const newState=gameStatusReducer(fakeGameStatusReducer, action);
        // expect(newState).toStrictEqual(action.payload)
        console.log(newState);
        console.log(fakeGameStatusReducer)
        expect(newState).toStrictEqual(fakeGameStatusReducer);
    });

    //default
    test('default case', ()=>{
        const action={type: 'action default', payload: {}};
        const newState=gameStatusReducer(fakeGameStatusReducer, action);
        expect(newState).not.toEqual(action.payload);
    });

    // state undefined
    test('state undefined', ()=>{
        const action={type: 'state undefined', payload: {}};
        const newState=gameStatusReducer(undefined, action);
        // expect(newState).toStrictEqual({});
        expect(newState).toStrictEqual({currentQuestionIndex: 0});
    });
});