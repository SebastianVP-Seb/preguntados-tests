import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ItemAnswer } from '../components/ItemAnswer';
import { useDispatch, useSelector } from 'react-redux';
import { alphabet } from '../utils/constants';
import { saveAnswer } from '@actions/answer.actions';
import { isCorrectAnswer } from '@actions/score.actions';

export const QuestionView = ({ nextQuestion }) => {
  const dispatch = useDispatch();

  const { questionSelectReducer } = useSelector(state => state);

  const { question, answers, id, feedback } = questionSelectReducer;

  const sorterAnswers = useMemo(() =>
    [...answers]
      .sort(() => Math.random() - 0.5)
      .map((item, i) => ({ ...item, index: alphabet[i], status: '' }))
    , [answers]
  );

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answersState, setAnswersState] = useState(sorterAnswers);
  const [wasAnswered, setWasAnswered] = useState(false);

  const getColorClass = (answer) => {
    if (wasAnswered && answer.isCorrect) {
      return 'success';
    }

    const answerId = answer.id;
    const currentIsSelected = answerId === selectedAnswer?.id;

    if (wasAnswered && !answer.isCorrect && currentIsSelected) {
      return 'danger';
    }
    return (currentIsSelected) ? 'selected' : '';
  }

  useEffect(() => {
    setAnswersState(sorterAnswers);
    setWasAnswered(false);
  }, [questionSelectReducer]);

  const handleChangeStatus = useCallback((id) => {
    !wasAnswered && setAnswersState(answer =>
      answer.map(item => item.id === id
        ? { ...item, status: 'selected' }
        : { ...item, status: '' })
    );
  }, [wasAnswered]);

  const gradeQuestionAndSaveAnswer = () => {
    dispatch(saveAnswer(id, selectedAnswer.isCorrect, selectedAnswer.id, 15, 1));
    dispatch(isCorrectAnswer(selectedAnswer?.isCorrect));
  };

  const handleOnClick = () => {
    if (!selectedAnswer) {
      alert('Selecciona una respuesta');
      return;
    }
    if (!wasAnswered) {
      setWasAnswered(true);
      gradeQuestionAndSaveAnswer();
    } else {
      nextQuestion();
    }
  };

  return (
    <div className="section__question">
      <div className="section_question--title">
        <p>{question}</p>
      </div>
      {wasAnswered &&
        <p className='section_question--feedback'>{feedback}</p>}
      <div className="answer__container">
        {answersState.map(answer => (
          <ItemAnswer
            key={answer.id}
            id={answer.id}
            index={answer.index}
            title={answer.title}
            status={getColorClass(answer)}
            handleChangeStatus={() => setSelectedAnswer(answer)}
          />
        ))}
      </div>
      <div className="section__question--buttons">
        <button
          className={`button is-${wasAnswered ? 'primary' : 'info'}`}
          onClick={handleOnClick}
        > {wasAnswered ? 'Siguiente' : 'Enviar'} </button>
      </div>
    </div>
  );
};
