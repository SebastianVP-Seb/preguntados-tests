import { addAnswer, saveAnswer } from '../../../src/actions/answer.actions';
import { TYPES } from '../../../src/types/typesReducer';
import { initialStateStoreMock } from '../initial-state.mock';
const { storeMock } = require("../store.mock");

describe('testing de answer.action.js', ()=>{

    let store;
    beforeEach(()=>{
        store=storeMock();
    });

    test('saveAnswer action', ()=>{
        const payload={};
        store.dispatch(saveAnswer(payload));
        const [actionSaveAnswer]=store.getActions();
        expect(actionSaveAnswer).toMatchObject({type: TYPES.ANSWERS.ADD, payload});
    });

    test('addAnswer action', ()=>{
        const payload={};
        store.dispatch(addAnswer(payload));
        const [actionAddAnswer]=store.getActions();
        expect(actionAddAnswer).toMatchObject({type: TYPES.ANSWERS.ADD, payload});
    });
});