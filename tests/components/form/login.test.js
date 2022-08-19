import React from 'react';
import { storeMock } from '../../store/store.mock';
import { Provider } from "react-redux";
import { Login } from "../../../src/components/form/login";
import {mount} from 'enzyme';
import { TYPES } from '../../../src/types/typesReducer';

describe('testing del componente Login', ()=>{

    let wrapper;
    let store;
    beforeEach(()=>{
        store=storeMock();
        wrapper=mount(
            <Provider store={store}>
                <Login />
            </Provider>
        );
    });

    //Para evitar replicar código
    const createForm=(attributes)=>{
        const form=document.createElement('form');
        const input=document.createElement('input');
        //Creará los atributos a los inputs
        attributes.forEach((item)=>{
            input.setAttribute(item.qualifiedName, item.value);
        });
        form.appendChild(input);
        return form;
    };

    test('debería hacer el userLoginAction 2 en el store', ()=>{
        //Para hacer la prueba con el name
        const name='Silvana';

        // let wrapper;
        // const store=storeMock();
        // wrapper=mount(
        //     <Provider store={store}>
        //         <Login />
        //     </Provider>
        // );
        //Creando formulario e input
            // *const form=document.createElement('form');
            // *const input=document.createElement('input');
        //añadiendo los atributos de name y value al input
            // *input.setAttribute('name', 'name');
            // *input.setAttribute('value', name);
        //agregando el input al formulario
            // *form.appendChild(input);
        
        const form=createForm([
            {qualifiedName: 'name', value: 'name'},
            {qualifiedName: 'value', value: name}
        ]);

        const e={
            preventDefault: ()=>{},
            // target: HTMLFormElement
            target: form
        };
        //HTMLFormElement permite acceder al form
        // console.log(wrapper.debug());//permite ver el componente
        //generar el onSubmit al formulario y buscarlo dentro del wrapper
        //haciendo c.l del evento en el componente Login, desde aquí se puede controlar el componente, 
        //mandándole lo que queramos luego del 'onSubmit'. Necesita que se mande el e.preventDefault
        //y el e.target
        // wrapper.find('form').invoke('onSubmit')('Hola desde login.test')
        //Dentro del form hay un input que necesita del name (propiedad) y el value (valor del input)
        //Crearlo
        wrapper.find('form').invoke('onSubmit')(e);

        //revisando que se manden las acciones
        // console.log(store.getActions());
        /* Se muestra: , que es la acción que se dispara cuando un usuario se logea: Se lanza:
        dispatch( userLoginAction2(form))
        [
            {
                type: '[USER] LOGGIN',
                payload: {
                id: '26cf49f4-8b31-4758-9374-2c7befbe9252',
                name: 'Seb',
                start: 1650663006808
                }
            }
        ]
        */
       const [loginAction]=store.getActions();
       console.log(loginAction);// es lo mismo que store.getActions()
       //probando por el tipo de acción
       expect(loginAction.type).toEqual(TYPES.USER.LOGGIN);
       //probando por el nombre (definiendo la cte name)
       expect(loginAction.payload.name).toStrictEqual(name);
    });

    test('testing del mensaje de error cuando se manda un string vacío', ()=>{

        const form=createForm([
            {qualifiedName: 'name', value: 'name'},
            {qualifiedName: 'value', value: ''}
        ]);

        const e={
            preventDefault: ()=>{},
            // target: HTMLFormElement
            target: form
        };

        //p. para buscar por clase
        //p# para buscar por id
        //p[] para buscar por name
        // console.log(wrapper.find('p.info__text--p').debug());
        console.log(wrapper.find('p.info__text--p').text());
        wrapper.find('form').invoke('onSubmit')(e);//la acción de onSubmit
        // console.log(store.getActions());//se comprueba que no hay acciones si el nombre viene vacío
        // console.log(wrapper.find('p.info__text--p').debug());
        console.log(wrapper.find('p.info__text--p').text());

        const phraseP=wrapper.find('p.info__text--p').text();
        //Comprobando que el texto del párrafo no es un string vacío y por lo tanto se ha montado el p
        //con el mensaje de error
        expect(phraseP).not.toStrictEqual('');
        //Comprobando que no haya acción en el arreglo de acciones, ya que como no hay login, no se dispara
        //la acción
        expect(store.getActions()).toStrictEqual([]);
        //Comprobando que al no haber acciones, la longitud del arreglo es falsy
        expect(store.getActions().length).toBeFalsy();
        //Comprobando que la longitud del texto es truthy, ya que se monta el mensaje de error
        expect(phraseP).toBeTruthy();
    });

    test('Verificando que la clase danger no esté al hacer Login', ()=>{
        // const name='';

        const form=createForm([
            {qualifiedName: 'name', value: 'name'},
            {qualifiedName: 'value', value: ''}
        ]);

        const e={
            preventDefault: ()=>{},
            target: form
        };
        const classContent=wrapper.find('p').prop('className');
        console.log(classContent);
        //haciendo la acción
        wrapper.find('button').invoke('onClick')()(e);

        console.log(wrapper.debug());

        console.log(store.getActions());
        const [loginAction]=store.getActions();
        console.log(loginAction);
        const classContent2=wrapper.find('p.info__text--p').prop('className');
        console.log(classContent2);
        //que la acción encontrada en store.getActions sea igual al login
        expect(loginAction.type).toStrictEqual(TYPES.USER.LOGGIN);
        // expect(classContent2).toContain('danger');
    });
});