import { getQuestions } from '../../../src/actions/questions.actions';
import { TYPES } from '../../../src/types/typesReducer';
import { storeMock } from '../store.mock';
import {setupServer} from 'msw/node';
import { handleRequestQuestions } from '../../handleReques/questions';
import { responseQuestions } from '../../handleReques/mocks';

describe('testing de questions.action', ()=>{

  const server=setupServer(
    handleRequestQuestions
  );//recibe los mocks que se quieran usar

  beforeAll(()=>{
    server.listen();//el servidor escuchará
  })
    
    test('get actions async', (done)=>{

      process.env.HOST_BACKEND='http://localhost:8081';

      const store = storeMock();
      store.dispatch(getQuestions()).then(()=>{
        // console.log('3.- Test');
        // console.log(store.getActions()); muestra las tres acciones (los 3 dispatch)
        //son tres dispatch
        //Se revisa cada acción en su archivo y se verifica el type. Cada acción tiene su type
        const [setQuestions, addTotalQuestions, mountQuestionByIndex] = store.getActions();

        //Verificando con type
        expect(setQuestions.type).toStrictEqual(TYPES.QUESTIONS.ADD);
        expect(addTotalQuestions.type).toStrictEqual(TYPES.SCORE.TOTAL_QUESTION);
        expect(mountQuestionByIndex.type).toStrictEqual(TYPES.ANSWER_SELECT.MOUNT);

        //Verificando con payload y apoyándonos de los mocks en questions.js (responseQuestions)
        //se ve la acción y qué tiene el payload
        expect(setQuestions.payload).toStrictEqual(responseQuestions.data);
        expect(addTotalQuestions.payload).toStrictEqual(responseQuestions.data.length);
        expect(mountQuestionByIndex.payload).toStrictEqual(responseQuestions.data[0]);

        done();//mandarlo a llamar una vez sepamos que la promesa se ha cumplido
      });
      // const [actionSetQuestions]=store.getActions();
      // expect(actionSetQuestions.type).toEqual(TYPES.QUESTIONS.ADD);
    });
});