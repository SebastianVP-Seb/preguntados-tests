import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { userLoginAction2 } from '@actions/user.actions';

const initialInfoAlert = {type: '', message: ''};

export const Login = () => {
  const dispatch = useDispatch();
  const [infoAlert, setInfoAlert] = useState(initialInfoAlert);

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    const form = Object.fromEntries(new FormData(e.target));
    if (form.name) {
      dispatch( userLoginAction2(form) );
      setInfoAlert(initialInfoAlert);
    } else {
      setInfoAlert({type: 'danger', message: 'Escribe un nombre valido'});
    }
  };

  return (
    <form
      className='container__center--flex'
      onSubmit={handleSubmitLogin}
    >
      <div className="control">
        <label htmlFor="">Ingresa tu nombre</label>
        <div className="control--input">
          <input type="text" name='name' autoComplete='off' />
          <p className={`info__text--p ${infoAlert.type}`}>
            {infoAlert.message}
          </p>
        </div>
      </div>
      <div className="buttons">
        <button
          type="submit"
          className='button is-primary'
        >Iniciar</button>
      </div>
    </form>
  );
};
