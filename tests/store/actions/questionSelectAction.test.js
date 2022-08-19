import {mountQuestionByIndex, questionSelectAction} from '../../../src/actions/questionSelectActtion';
import { TYPES } from '../../../src/types/typesReducer';
import { initialStateStoreMock } from '../initial-state.mock';
const { storeMock } = require("../store.mock");

describe('testing de questionSelectAction', ()=>{

    /*Se mandan a traer los estados con getState. En la acción, el mountQuestionByIndex necesita
    del index. Si hay id, hace el dispatch. Se comprueba que los ids del questionsReducers coincidan */

    let store;
    beforeEach(()=>{
        store=storeMock();
    });

    //Para hacer el test se necesita questionsReducer y userReducer, éstos se deben setear o inicializar
    test('action mountQuestionByIndex',()=>{
        // console.log(store.getState());//Muestra todo el estado, todos los reducers
        const {questionsReducer, userReducer} = store.getState();
        // console.log(questionsReducer, userReducer);//son los que necesitamos, los que involucra la acción
        // questionsReducer contiene todas las preguntas, verificar que se estén renderizando
        questionsReducer.forEach((question, index)=>{
            store.dispatch(mountQuestionByIndex(index));
            // Like const [action]=store.getActions();
            // store.getActions()[index].payload===questionsReducer[index];
            // console.log(store.getActions()[index]);//se necesita hacer la línea 21 para que se obtengan las
            //acciones en el store. Muestra el objeto con su type, y el payload igual al item (console.log)
            // console.log(item);//Muestra el obj con el id, question, feedback y arreglo de answers
            // expect(store.getActions()[index].payload.id).toEqual(questionsReducer[index].id);
            //Ocupando el question
            expect(store.getActions()[index].payload.id).toEqual(question.id);
        });
    });

    test('verificando que no se monte cuando no hay un id', ()=>{
        //Aquí se le pasa un estado inicial, con un id=nulo, sin id, por lo tanto, al hacer el 
        //console log de las acciones, debería regresar un arreglo vacío, getActions es un arreglo, por
        //lo que en el expect se comprueba la longitud igual a cero. Se verifica que si no hay id, no 
        //se dispare ninguna acción
        const index=1;
        const store=storeMock({
            ...initialStateStoreMock, userReducer: {id: ''}
            //se trae todo el estado, pero se modifica el del usuario con un id nulo
        });
        store.dispatch(mountQuestionByIndex(index));
        console.log(store.getActions());
        expect(store.getActions().length).toBe(0);
    });

    test('action questionSelectAction', ()=>{
        const payload=[];
        store.dispatch(questionSelectAction(payload));
        const [actionQuestionSelect]=store.getActions();
        expect(actionQuestionSelect).toMatchObject({type: TYPES.ANSWER_SELECT.MOUNT, payload})
    });
});