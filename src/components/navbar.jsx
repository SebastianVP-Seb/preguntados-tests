import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { QuestionSelector } from './question-selector';
import { userLoggOutAction, userLoggOutAction2 } from '@actions/user.actions';

export const Navbar = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(state => state.userReducer);

  const handleLogout = () => {
    // dispatch(userLoggOutAction());
    dispatch(userLoggOutAction2());
  }

  return (
    <>
      {name ? (
      <nav className="navbar">
        <div className="navbar__start">
          Hola, {name}
        </div>
        <QuestionSelector />
        <div className="navbar__end">
          <button
            className='button is-secondary'
            onClick={handleLogout}
          >Salir</button>
        </div>
      </nav>
      ) : (<></>)}
    </>
  );
};

