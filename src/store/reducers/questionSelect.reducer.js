import { TYPES } from "../../types/typesReducer";

const initialState = {}
const initialState2 = {
  id: 'Q-01',
  question: '¿Cuántos meses equivalen a un Semestre?',
  feedback: 'Recuerda que Semestre equivale a Seis Meses',
  answers: [
    {
      id: 1,
      title: 'Respuesta 1',
      isCorrect: false
    },
    {
      id: 2,
      title: 'Respuesta 2',
      isCorrect: false
    },
    {
      id: 3,
      title: 'Respuesta 3',
      isCorrect: true
    },
    {
      id: 4,
      title: 'Respuesta 4',
      isCorrect: false
    },
  ]
};

export const questionSelectReducer = ( state = initialState, action ) => {
  switch (action.type) {

    case TYPES.ANSWER_SELECT.MOUNT:
      return {
        ...action.payload
      }
    default:
      return state;
  };
};

