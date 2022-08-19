import { questionSelectAction } from '../../../src/actions/questionSelectActtion';
import {questionSelectReducer} from '../../../src/store/reducers/questionSelect.reducer';
//renombrando para que no tenga el mismo nombre
import {questionSelectReducer as stateQuestionSelectReducer} from '../initial-state.mock';

describe('testing de questionSelectReducer', ()=>{

    test('questionsSelectReducer', ()=>{
        //El payload de questionSelectAction es stateQuestionSelectReducer
        const action=questionSelectAction(stateQuestionSelectReducer);
        //en lugar del obj vacío podría ser: stateQuestionSelectReducer, lo que se tiene en el mock state
        const newState=questionSelectReducer({}, action);
        //action.payload===newState -> Teoría
        // console.log(action.payload);
        // console.log(newState);
        expect(newState).toEqual(action.payload);
    });

    //probando el default, 'testing del default del case., mandando un payload falso.
    //el estado del regreso debería ser el estado inicial
    test('verifica que se retorne el estado en caso de default', ()=>{
        const action={type: 'is the action default', payload: {}};
        const newState=questionSelectReducer(stateQuestionSelectReducer, action);
        expect(newState).toStrictEqual(stateQuestionSelectReducer);
        //otra forma de verificar es que el payload no coincida con el newState:
        expect(newState).not.toEqual(action.payload);
    });

    //en el reducer: state=initialState, es considerado una branch. Lainicialización a través de los props, 
    //también tiene que ser testeada. Para probarlo: no mandar la inicialización, se le manda un undefined.
    //no se requiere que se actualice algo en el estado, por lo que se le manda un payload falso. El estado
    //inicial es un arreglo vacío, por lo que en el spect se espera un arreglo vacío
    test('verifica que se retorne el initial-state', ()=>{
        const action={type: 'is the action default', payload: {}};
        const newState=questionSelectReducer(undefined, action);
        expect(newState).toStrictEqual({});
    });
});