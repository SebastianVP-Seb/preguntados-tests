
const initialState = {
  totalPoints: 9.8, //total de puntos, ya con penalizacion de tiempo
  wrongAnswers: 5, //total de preguntas no contestadas correctamente
  correctAnswers: 8, //total de preguntas contestadas correctamente
  totalQuestions: 13, //total de preguntas por contestar
};

// 60 seg = 1pt
// 30 seg = .5pt

export const scoreReducer = ( state = initialState, action ) => {
  switch (action.type) {

    default:
      return state;
  };
};

