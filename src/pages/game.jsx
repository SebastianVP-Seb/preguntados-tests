import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { questionSelectAction } from '@actions/questionSelectActtion';
import { Card } from '../components/card';
import { QuestionView } from './QuestionView';
import { addTotalQuestionsAction } from '@actions/score.actions';

export const Game = () => {
  const { questionSelectReducer, questionsReducer, userReducer } = useSelector(state => state);
  const [indexQuestion, setIndexQuestion] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userReducer.id) {
      dispatch(
        questionSelectAction(questionsReducer[indexQuestion])
      );
    }
  }, [indexQuestion, userReducer]);

  useEffect(() => {
    if (userReducer.id) {
      dispatch(addTotalQuestionsAction(
        questionsReducer.length
      ))
    }
  }, [userReducer, questionsReducer]);

  const nextQuestion = () => {addTotalQuestionsAction
    // TODO: validar que no se desborde el array
    // mandar el resultado de las preguntas
    setIndexQuestion(prev => prev + 1)
    // if ( questionsReducer.lenght < indexQuestion ) {
    // } else {
    //   alert('No hay mas preguntas');
    // }
  }

  return (
    <Card>
      {questionSelectReducer?.id ? (
        <QuestionView nextQuestion={nextQuestion} />
      ) : <h1>No hay preguntas</h1>}
      {/* {welcomeInit == 0 ? QuestionView : WelcomeView } */}
    </Card>
  )
}
