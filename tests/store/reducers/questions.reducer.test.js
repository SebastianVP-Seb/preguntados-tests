import { setQuestionsAction } from '../../../src/actions/questions.actions';
import { questionsReducer } from '../../../src/store/reducers/questions.reducer';
import {questionsReducer as fakeQuestionsReducer} from '../initial-state.mock';

describe('testing de questions.reducer', ()=>{

    test('TYPES.QUESTIONS.ADD', ()=>{
        const payload=[];
        const action=setQuestionsAction(payload);
        const newState=questionsReducer(fakeQuestionsReducer, action);
        expect(newState).toStrictEqual(action.payload)
    });

    test('default case', ()=>{
        const action={type: 'action default', payload: {}};
        const newState=questionsReducer(fakeQuestionsReducer, action);
        expect(newState).not.toEqual(action.payload);
    });

    test('state undefined', ()=>{
        const action={type: 'state undefined', payload:{}};
        const newState=questionsReducer(undefined, action);
        expect(newState).toStrictEqual([]);
    });
});