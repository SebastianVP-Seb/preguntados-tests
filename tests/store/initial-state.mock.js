export const answersReducer = [
  {
    questionId: 'd2bd1dbc-130d-4436-aed8-54104796d4ef',
    isCorrect: false,
    answerSelect: '61911842',
    responseTime: 15,
    point: 1
  },
  {
    questionId: 'cb117bd3-2958-478b-8bb1-b732c55ae797',
    isCorrect: false,
    answerSelect: '665ff83a',
    responseTime: 15,
    point: 1
  },
  {
    questionId: 'cd5fed24-8b10-498c-bc1f-383da32f5087',
    isCorrect: true,
    answerSelect: 'd7ffaa00',
    responseTime: 15,
    point: 1
  }
];

export const questionSelectReducer = {
  id: 'cd5fed24-8b10-498c-bc1f-383da32f5087',
  question: '¿Cuánto tiempo tarda la luz del Sol en llegar a la Tierra?',
  feedback: 'El tiempo que tarda la luz del Sol en llegar a la Tierra se calcula dividiendo la distancia que hay entre el Sol y la Tierra, aproximadamente 150 000 000 km, entre la velocidad de la luz, que es 300 000 km/s:\n\n 150 000 000 km÷300 000 km/s= 500 s; 500 s ÷ 60 s/min = 8,3 minutos.',
  answers: [
    {
      id: '7627b788',
      title: '12 minutos',
      isCorrect: false
    },
    {
      id: '8fb66646',
      title: '1 día',
      isCorrect: false
    },
    {
      id: '731bd372',
      title: '12 horas',
      isCorrect: false
    },
    {
      id: 'd7ffaa00',
      title: '8 minutos',
      isCorrect: true
    }
  ]
}

export const questionsReducer = [
  {
    id: 'd2bd1dbc-130d-4436-aed8-54104796d4ef',
    question: '¿Cuántos decimales tiene el número pi π?',
    feedback: 'A lo largo del tiempo, varios estudiosos se han dedicado a calcular el número π y aún no han llegado al final. Para el 2019 se habían calculado más de 31 billones de decimales.',
    answers: [
      {
        id: '61911842',
        title: 'UN MILLON',
        isCorrect: false
      },
      {
        id: '61911dce',
        title: 'Cien',
        isCorrect: false
      },
      {
        id: '61911f7c',
        title: 'Infinitos',
        isCorrect: true
      },
      {
        id: '6191213e',
        title: 'Mil',
        isCorrect: false
      }
    ]
  },
  {
    id: 'cb117bd3-2958-478b-8bb1-b732c55ae797',
    question: '¿Cuántos jugadores por equipo participan en un partido de voleibol?',
    feedback: 'Los equipos de voleibol pueden tener hasta 14 jugadores, pero en la cancha de juego participan 6 jugadores por equipo.',
    answers: [
      {
        id: '9f89d410',
        title: '3 jugadores',
        isCorrect: false
      },
      {
        id: '665ff83a',
        title: '4 jugadores',
        isCorrect: false
      },
      {
        id: '5912c57d',
        title: '5 jugadores',
        isCorrect: false
      },
      {
        id: '96f69c16',
        title: '6 jugadores',
        isCorrect: true
      }
    ]
  },
  {
    id: 'cd5fed24-8b10-498c-bc1f-383da32f5087',
    question: '¿Cuánto tiempo tarda la luz del Sol en llegar a la Tierra?',
    feedback: 'El tiempo que tarda la luz del Sol en llegar a la Tierra se calcula dividiendo la distancia que hay entre el Sol y la Tierra, aproximadamente 150 000 000 km, entre la velocidad de la luz, que es 300 000 km/s:\n\n 150 000 000 km÷300 000 km/s= 500 s; 500 s ÷ 60 s/min = 8,3 minutos.',
    answers: [
      {
        id: '7627b788',
        title: '12 minutos',
        isCorrect: false
      },
      {
        id: '8fb66646',
        title: '1 día',
        isCorrect: false
      },
      {
        id: '731bd372',
        title: '12 horas',
        isCorrect: false
      },
      {
        id: 'd7ffaa00',
        title: '8 minutos',
        isCorrect: true
      }
    ]
  },
  {
    id: 'c5323abc-8da1-4177-a11b-330d49950895',
    question: '¿A quién se le atribuye la frase "Solo sé que no sé nada"?',
    feedback: '"Solo sé que no sé nada" o "solo sé que nada sé" es una frase atribuida al filósofo griego Sócrates (470-399 a.de C) que se refiere a reconocer que es un ignorante.',
    answers: [
      {
        id: '06082f8e',
        title: 'Sócrates',
        isCorrect: true
      },
      {
        id: 'c34a446d',
        title: 'Aristóteles',
        isCorrect: false
      },
      {
        id: 'c8077986',
        title: 'Nietszche',
        isCorrect: false
      },
      {
        id: '44efc480',
        title: 'Sófocles',
        isCorrect: false
      }
    ]
  },
  {
    id: 'f81fa7f6-340a-4402-b6a6-aeceb9f466da',
    question: '¿Cuál es la montaña más alta del continente americano?',
    feedback: 'El Aconcagua se encuentra en la provincia de Mendoza, en Argentina, en la cordillera de Los Andes. Mide 6962 metros sobre el nivel del mar.',
    answers: [
      {
        id: '2e53a7ff',
        title: 'Pico Bolívar',
        isCorrect: false
      },
      {
        id: 'a310a238',
        title: 'Aconcagua',
        isCorrect: true
      },
      {
        id: '3b8cd29f',
        title: 'Monte Everest',
        isCorrect: false
      },
      {
        id: '44d6241c',
        title: 'Monte Fuji',
        isCorrect: false
      }
    ]
  },
  {
    id: '1c04f4d7-9693-4661-8945-56944ec0e74e',
    question: '¿Cuál es el animal terrestre más grande en la actualidad?',
    feedback: 'El elefante africano es animal terrestre más grande. Puede medir hasta 4 metros de altura y 7 metros de largo y pesar hasta 8 toneladas.',
    answers: [
      {
        id: '4c738e66',
        title: 'Jirafa',
        isCorrect: false
      },
      {
        id: 'd47e4bc6',
        title: 'Elefante africano',
        isCorrect: true
      },
      {
        id: '51b9486a',
        title: 'Tiburón blanco',
        isCorrect: false
      },
      {
        id: '57805617',
        title: 'Ballena azul',
        isCorrect: false
      }
    ]
  },
  {
    id: 'f81fa7f6-340a-4402-b6a6-aeceb9f466dd',
    question: '¿Qué líder mundial quedó conocida como "La Dama de Hierro"?',
    feedback: 'Margaret Thatcher (1925-2013) fue la primera ministra británica entre 1979 y 1990 y la primera mujer en ocupar ese puesto. Fue bautizada por la prensa soviética como "La Dama de Hierro" después del discurso que Thatcher pronunció en 1976 acusando a la Unión Soviética de querer dominar el mundo.',
    answers: [
      {
        id: 'e0e3036b',
        title: 'Angela Merkel',
        isCorrect: false
      },
      {
        id: 'eae0faa4',
        title: 'Hillary Clinton',
        isCorrect: false
      },
      {
        id: 'a89417ea',
        title: 'Margaret Thatcher',
        isCorrect: true
      },
      {
        id: '5b4393aa',
        title: 'Christine Lagarde',
        isCorrect: false
      }
    ]
  },
  {
    id: 'fe345d2a-352a-4bda-871f-f6d303752df5',
    question: '¿Quién fue el primer hombre en pisar la Luna?',
    feedback: 'El astronauta norteamericano Neil Armstrong (1930-2012) fue el primer humano en pisar la luna el 20 de julio de 1969, al salir del módulo lunar de la misión Apollo 11. Los otros astronautas que acompañaron a Armstrong en esta mision fueron Michael Collins y Edwin "Buzz" Aldrin.',
    answers: [
      {
        id: 'ea430eea',
        title: 'Buzz Aldrin',
        isCorrect: false
      },
      {
        id: 'c14e3380',
        title: 'Charles Conrad',
        isCorrect: false
      },
      {
        id: '67388b9a',
        title: 'Michael Collins',
        isCorrect: false
      },
      {
        id: '0bdb5558',
        title: 'Neil Armstrong',
        isCorrect: true
      }
    ]
  },
  {
    id: '5e4e37fd-6fbe-4010-abf4-8f83038e995b',
    question: '¿Quién descubrió la vacuna contra la rabia y el proceso de pasteurización?',
    feedback: 'Louis Pasteur (1822-1895) fue un científico francés que descubrió en 1862 el proceso de esterilización de los alimentos conocido como pasteurización. En 1885 descubrió la vacuna contra la rabia.',
    answers: [
      {
        id: '26daf47b',
        title: 'Louis Pasteur',
        isCorrect: true
      },
      {
        id: 'b8dde748',
        title: 'Marie Curie',
        isCorrect: false
      },
      {
        id: '831f886d',
        title: 'Antoine Lavoisier',
        isCorrect: false
      },
      {
        id: '126ec066',
        title: 'Edward Jenner',
        isCorrect: false
      }
    ]
  }
];

export const scoreReducer = {
  totalPoints: 0,
  wrongAnswers: 0,
  correctAnswers: 0,
  totalQuestions: 0
}

export const userReducer = {
  id: '80b43934-fcce-426b-b11f-62f0ff21da9f',
  name: 'asdf',
  start: 1650296004834
};

export const gameStatusReducer = {
  currentQuestionIndex: 0
}

export const initialStateStoreMock = {
  answersReducer,
  questionSelectReducer,
  questionsReducer,
  scoreReducer,
  userReducer,
  gameStatusReducer
}

