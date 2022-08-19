import { userLoggOutAction, userLogginAction } from '../../../src/actions/user.actions';
import { userReducer } from '../../../src/store/reducers/user.reducer';
import {userReducer as fakeUserReducer} from '../initial-state.mock';

describe('testing de user.reducer', ()=>{

    test('TYPES.USER.LOGGIN', ()=>{
        const payload={
            id: '80b43934-fcce-426b-b11f-62f0ff21da9f',
            name: 'asdf',
            start: 1650296004834
        };
        const action=userLogginAction(payload);
        const newState=userReducer(fakeUserReducer, action);
        expect(newState).toStrictEqual(fakeUserReducer);
    });

    test('TYPES.USER.LOGOUT', ()=>{
        const action=userLoggOutAction();
        const newState=userReducer(fakeUserReducer, action);
        expect(newState).toStrictEqual({
            id: '',
            name: '',
            start: ''
        });
    });

    // default
    test('default case', ()=>{
        const action={type: 'default case', payload: {}};
        // const action={type: 'default case', payload: {
        //     id: '80b43934-fcce-426b-b11f-62f0ff21da9f',
        //     name: 'asdf',
        //     start: 1650296004834
        // }};
        const newState=userReducer(fakeUserReducer, action);
        expect(newState).not.toEqual(action.payload);
        expect(newState).toStrictEqual(fakeUserReducer);
    });

    // state undefined
    test('state undefined', ()=>{
        const action={type: 'state undefined', payload:{}};
        const newState=userReducer(undefined, action);
        // expect(newState).toStrictEqual({}); no 
        expect(newState).toStrictEqual({
            id: '',
            name: '',
            start: ''
        });
    });
});