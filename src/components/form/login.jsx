import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { userLoginAction2 } from '../../actions/user.actions';

const initialInfoAlert = {type: '', message: ''};

export const Login = () => {
  const dispatch = useDispatch();
  const [infoAlert, setInfoAlert] = useState(initialInfoAlert);

  const handleSubmitLogin = (e) => {
    console.log('click al btn')
    //c.l para los tests
    // console.log(e);
    // console.log(e.target.name.value)
    e.preventDefault();
    const form = Object.fromEntries(new FormData(e.target));
    // console.log(form);
    if (form.name) {
      dispatch( userLoginAction2(form));
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
          onClick={()=>handleSubmitLogin}
        >Iniciar</button>
      </div>
    </form>
  );
};
