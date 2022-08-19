import {setCurrentQuestionIndex} from '../../../src/actions/gameStatus.action';
import { TYPES } from '../../../src/types/typesReducer';
const { storeMock } = require("../store.mock");

describe('testing de gameStatus', ()=>{
    let store;
    beforeEach(()=>{
        store=storeMock();
    });

    test('setCurrentQuestionIndex action', ()=>{
        const payload={};
        store.dispatch(setCurrentQuestionIndex(payload));
        const [actionSetCurrentQuestionIndex]=store.getActions();
        expect(actionSetCurrentQuestionIndex).toMatchObject({type: TYPES.GAME_STATUS.SET_CURRENT_QUESTION_INDEX, payload});
    });
});