import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLoggOutAction } from '@actions/user.actions';
import { QuestionSelector } from './question-selector';

export const Navbar = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(state => state.userReducer);

  const handleLogout = () => {
    dispatch(userLoggOutAction());
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

