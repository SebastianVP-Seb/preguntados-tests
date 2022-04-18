import React from 'react';
import { mount } from 'enzyme';
import { BsCheckCircle, BsXCircle } from 'react-icons/bs';

import { ItemAnswer } from '../src/components/ItemAnswer';
import { answerMockTest } from './utils';

describe('probando el inicio de la aplicacion', () => {

  const props = {
    index: 'A',
    title: 'Pregunta Titulo dos',
    handleChangeStatus: () => {},
    id: 'idMockTest',
    status: 'danger',
  }
  test('deberia renderizar ItemAnswer', () => {

    const wrapper = mount(
      <ItemAnswer
        handleChangeStatus={() => {}}
        id={'idMockTest'}
        status={'danger'}
      />
    );
    const index = wrapper.find('.card__answer--start').text();
    const title = wrapper.find('.answer--start__title').text();
    expect(index).toEqual('');
    expect(title).toEqual('');
  });

  test('deberia renderizar ItemAnswer', () => {

    const wrapper = mount(
      <ItemAnswer {...props} />
    );
    const title = wrapper.find('.answer--start__title').text();
    expect(title).toEqual(props.title);
  })

  test('deberia renderizar icono de componente BsXCircle', () => {
    const wrapper = mount(
      <ItemAnswer {...props} />
    );
    expect(wrapper.find(BsXCircle).exists()).toBeTruthy();
    expect(wrapper.find(BsCheckCircle).exists()).toBeFalsy();
  });

  test('deberia renderizar icono de componente BsCheckCircle', () => {
    const propsStatusSuccess = {
      ...props,
      status: 'success',
    }
    const wrapper = mount(
      <ItemAnswer {...propsStatusSuccess} />
    );
    expect(wrapper.find(BsXCircle).exists()).toBeFalsy();
    expect(wrapper.find(BsCheckCircle).exists()).toBeTruthy();
  });

  test('debria renderizar un arreglo de componentes', () => {
    const wrapper = mount(
      <>
        {answerMockTest.map(answer => (
          <ItemAnswer
            key={answer.id}
            id={answer.id}
            index='A'
            title={answer.title}
            status={answer.status}
            handleChangeStatus={() => {}}
          />
        ))}
      </>
    );
    wrapper.find(ItemAnswer).forEach((answ, index) => {
      const title = answ.find('.answer--start__title').text();
      expect(title).toEqual(answerMockTest[index].title);
    });
  });

  test('debria renderizar un arreglo de componentes de card_answer', () => {
    const wrapper = mount(
      <>
        {answerMockTest.map(answer => (
          <ItemAnswer
            key={answer.id}
            id={answer.id}
            index='A'
            title={answer.title}
            status={answer.status}
            handleChangeStatus={() => {}}
          />
        ))}
      </>
    );
    wrapper.find(ItemAnswer).forEach((answ, index) => {
      const selector = `.card__answer.${answerMockTest[index].status}`
      expect(answ.find(selector).exists()).toBeTruthy();
    });
  })

})
