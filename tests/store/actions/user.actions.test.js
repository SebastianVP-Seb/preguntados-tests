import { userLogginAction, userLoggOutAction, userLoginAction2, userLoggOutAction2 } from '../../../src/actions/user.actions';
const { TYPES } = require("../../../src/types/typesReducer");
const { storeMock } = require("../store.mock");

describe('testing de user.actions.js',()=>{
   
    let store;
    beforeEach(()=>{
        store=storeMock();
    });

    test('action userLoginAction', ()=>{
        const name='Seb';
        store.dispatch(userLogginAction(name));
        const [actionUserLogin]=store.getActions();
        expect(actionUserLogin).toMatchObject({type: TYPES.USER.LOGGIN, payload: name});
    });

    test('action userLogOutAction', ()=>{
        store.dispatch(userLoggOutAction());
        const [actionUserLogOut]=store.getActions();
        expect(actionUserLogOut).toMatchObject({});
    });

    test('action userLoginAction 2', ()=>{
        // const name= 'Seb';
        const payload={name: 'Seb'};
        store.dispatch(userLoginAction2(payload));
        const [actionUserLogin2]=store.getActions();
        expect(actionUserLogin2).toMatchObject({type: TYPES.USER.LOGGIN, payload: payload });
    });

    test('action userLogOutAction 2', ()=>{
        store.dispatch(userLoggOutAction2());
        const [actionUserLogOut2]=store.getActions();
        expect(actionUserLogOut2).toMatchObject({});
    });
});