import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ItemAnswer } from '../components/ItemAnswer';
import { useDispatch, useSelector } from 'react-redux';
import { alphabet } from '../utils/constants';
import { addAnswer } from '@actions/answer.actions';

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
  const [answersState, setAnswersState] = useState(sorterAnswers);
  const [wasAnswered, setWasAnswered] = useState(false);

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

  const handleOnClick = () => {
    wasAnswered ? nextQuestion() : sendQuestion();
  };

  const sendQuestion = () => {
    const selectedAnswers = answersState
      .filter(answer => answer.status === 'selected');
    const hasAnswer = selectedAnswers.length > 0;
    if (hasAnswer) {
      const selectedAnswer = selectedAnswers[0];
      setAnswersState(previous => previous.map(
        answer => {
          if (answer.isCorrect) {
            return { ...answer, status: 'success' };
          }
          if (!answer.isCorrect && answer.id === selectedAnswer.id) {
            return { ...answer, status: 'danger' };
          }
          return answer;
        }
      ));
      dispatch(addAnswer(
        id, selectedAnswer.isCorrect, selectedAnswer.id, 15, 1
      ));
      setWasAnswered(true);
    } else {
      alert('Selecciona una respuesta');
    }
  };

  return (
    <div className="section__question">
      <div className="section_question--title">
        <p>{question}</p>
      </div>
        { wasAnswered &&
          <p className='section_question--feedback'>{feedback}</p>}
      <div className="answer__container">
        {answersState.map(answer => (
          <ItemAnswer
            key={answer.id}
            id={answer.id}
            index={answer.index}
            title={answer.title}
            status={answer.status}
            handleChangeStatus={handleChangeStatus}
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
