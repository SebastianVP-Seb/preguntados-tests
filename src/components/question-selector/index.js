import { setCurrentQuestionIndex } from '@actions/gameStatus.action';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const QuestionSelector = () => {
  const {
    questionsReducer: questions,
    answersReducer: answers,
    questionSelectReducer: currentQuestion,
  } = useSelector(store => store);

  const dispatch = useDispatch();

  const getQuestionStateClasses = useCallback((question) => {
    if (currentQuestion.id === question.id) {
      return 'questionIsSelected';
    }
    const answer = answers.find(answer => answer.questionId === question.id);
    if (!answer) {
      return '';
    }
    return answer.isCorrect ? 'questionIsCorrect' : 'questionIsWrong';
  }, [answers, currentQuestion]);

  const onChangeQuestionIndex = (question, questionIndex) => {
    if (currentQuestion.id !== question.id) {
      dispatch(setCurrentQuestionIndex(questionIndex));
    }
  };

  return (<div className="questionSelectorContainer">
    <span>Preguntas: </span>
    {
      questions.map((question, index) => (
        <p
          key={question.id}
          onClick={() => onChangeQuestionIndex(question, index)}
          className={`questionSelectorItem ${getQuestionStateClasses(question)}`}
        >
          {index + 1}
        </p>
      ))
    }
  </div>);
};
