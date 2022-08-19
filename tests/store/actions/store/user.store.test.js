import { configureStore } from '../../../../src/store/index';
import {userLogginAction, userLoggOutAction, userLoginAction2, userLoggOutAction2} from '../../../../src/actions/user.actions';
import { v4 as uuid} from 'uuid';

describe('Testing del store de user.reducer', ()=>{

    test('should login state', ()=>{
        const store=configureStore();
        const payload={
            id: uuid(),
            name: 'Seb',
            start: new Date().getTime()
        };
        // console.log(store.getState().userReducer);//estado vacío
        const beforeState=store.getState().userReducer;
        store.dispatch(userLogginAction(payload));
        // console.log(store.getState().userReducer);//estado cargado con los datos del payload
        const afterState=store.getState().userReducer;
        expect(afterState).toStrictEqual(payload);//lo que le mandamos
        expect(beforeState).not.toStrictEqual(payload);//ya no debe ser igual porque ya cambió
    });

    test('logout: debería devolver un estado vacío', ()=>{
        //mandándole un estado inicial, ya que puede recibirlo, por la configuración hecha en el index
        //sólo se manda el userReducer, no es necesario hacer el spread 
        const store=configureStore({
            userReducer: {
                id: uuid(),
                name: 'Seb',
                start: new Date().getTime()
            }
        });

        const initialStateLogOut={id: '', name: '', start: ''};
        //el reducer se ejecuta a través del rootReducer y trae todos los estados iniciales, luego el 
        //configureStore ejecuta o inicializa de nuevo para el userReducer y reemplaza este elemento
        //por eso ya no es necesario hacer el spread
        // console.log(store.getState()); todos los estado
        // console.log(store.getState().userReducer);
        const beforeState=store.getState().userReducer;
        store.dispatch(userLoggOutAction());
        const afterState=store.getState().userReducer;
        // console.log(store.getState().userReducer);//ya regresa el estado vacío 
        expect(afterState).toStrictEqual(initialStateLogOut);
        expect(beforeState).not.toStrictEqual(initialStateLogOut);
    });

    test('login con el middleware thunk', ()=>{
        const store=configureStore();
        const payload={name: 'Seb'};//esta acción sólo necesita del name

        const beforeState=store.getState();
        console.log(store.getState().userReducer);

        store.dispatch(userLoginAction2(payload));

        console.log(store.getState().userReducer);
        const afterState=store.getState();
        
        expect(beforeState.userReducer.name).not.toStrictEqual(payload.name);
        expect(afterState.userReducer.name).toStrictEqual(payload.name);
    });

    test('logout con middleware Thunk', ()=>{
        const store=configureStore({
            userReducer: {
                id: uuid(),
                name: 'Seb',
                start: new Date().getTime()
            }
        });
        const initialStateLogOut={id: '', name: '', start: ''};

        const beforeState=store.getState().userReducer;
        store.dispatch(userLoggOutAction2());
        const afterState=store.getState().userReducer;

        expect(afterState).toStrictEqual(initialStateLogOut);
        expect(beforeState).not.toStrictEqual(initialStateLogOut);
    });
});