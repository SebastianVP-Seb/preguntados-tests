import { addAnswer } from '../../../src/actions/answer.actions';
import {answersReducer} from '../../../src/store/reducers/answer.reducer';
import {answersReducer as fakeAnswerReducer} from '../initial-state.mock';

describe('testing de answer.reducer', ()=>{

    test('TYPES.ANSWERS.ADD', ()=>{
        // const payload=[
        //     {
        //         questionId: 'd2bd1dbc-130d-4436-aed8-54104796d4ef',
        //         isCorrect: false,
        //         answerSelect: '61911842',
        //         responseTime: 15,
        //         point: 1
        //       },
        //       {
        //         questionId: 'cb117bd3-2958-478b-8bb1-b732c55ae797',
        //         isCorrect: false,
        //         answerSelect: '665ff83a',
        //         responseTime: 15,
        //         point: 1
        //       },
        //       {
        //         questionId: 'cd5fed24-8b10-498c-bc1f-383da32f5087',
        //         isCorrect: true,
        //         answerSelect: 'd7ffaa00',
        //         responseTime: 15,
        //         point: 1
        //       }
        // ];
        const payload=[];
        const action=addAnswer(payload);
        const newState=answersReducer(fakeAnswerReducer, action);
        // console.log(newState);
        // console.log(fakeAnswerReducer)
        expect(newState).toEqual(action)
    });

    test('Default case', ()=>{
        const action={type: 'action defaul', payload: {}};
        const newState=answersReducer(fakeAnswerReducer, action);
        expect(newState).not.toEqual([action]);
    });

    test('state undefined', ()=>{
        const action={type: 'state undefined', payload: {}};
        const newState=answersReducer(undefined, action);
        // expect(newState).toStrictEqual({}); es un arreglo, no un objeto
        expect(newState).toStrictEqual([]);
    });
});