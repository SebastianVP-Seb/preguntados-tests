import React from 'react';
import { BsCheckCircle, BsXCircle } from 'react-icons/bs';

export const ItemAnswer = React.memo(( props ) => {
  const {
    index = '',
    title = '',
    handleChangeStatus,
    id,
    status,
  } = props;
  return (
    <div
      role='button'
      onClick={() => handleChangeStatus(id)}
      className={`card__answer ${status}`}
    >
      <div className="card__answer--start">
        {index.toUpperCase()}
        <div className="answer--start__title">
          {title}
        </div>
      </div>
      <div className="card__answer--end">
        {status === 'danger' && <BsXCircle />}
        {status === 'success' && <BsCheckCircle />}
      </div>
    </div>
  )
})
