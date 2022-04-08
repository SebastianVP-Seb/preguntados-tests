import React from 'react';
import { useSelector } from 'react-redux';
import { Login } from './form/login';
import { Navbar } from './navbar';

export const Card = ({ children }) => {
  const { id } = useSelector(state => state.userReducer);
  return (
    <>
      <Navbar />
      <div className="card">
        {id ? ( children ) : ( <Login /> )}
      </div>
    </>
  )
}
