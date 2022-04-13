import '@testing-library/jest-dom';

import { calculateIVA, getUser, greet, invertedPhase, randomRange } from '../src/utils/funcionsHelp';


describe('creacion de test de ejemplo', () => {

  test('Que los string coincidan', () => {
    const name = 'Miguel Andres';
    expect(name).toEqual('Miguel Andres');
  });

  test('deberia mandar un saludo al nombre', () => {
    const name = 'Miguel Andres';
    const greetAction = greet(name);
    expect(greetAction).toContain(name);
  });

  test('deberia cumplir el rango en el random', () => {
    const max = 20;
    const min = 10;
    const randomNumber = randomRange(max, min);
    expect(randomNumber).toBeLessThanOrEqual(max);
    expect(randomNumber).toBeGreaterThanOrEqual(min);
  });

  test('deberia calcular el iva del monto ingresado en 16%', () => {
    const mount = 20;
    const tax = calculateIVA(mount);
    expect(tax).toEqual(mount * 0.16);
  });

  test('debería contener el mes de abril', () => {
    const newMonth = 'abril';
    const months = ['enero', 'febrero', 'marzo'];
    // const newArray=months.push(newMonth);
    expect(months).not.toContain(newMonth)
  });

  test('deberia recibir los mismos datos de usuario', () => {
    const testUser = {
      id: 1234,
      username: 'oscar'
    }
    const user = getUser(testUser.id, testUser.username);
    expect(user).toMatchObject(testUser);
  });

  test('deberia recibir la frase al reves', () => {
    const normalTestPhase = "Hola estoy en clase";
    const invPhase = invertedPhase(normalTestPhase);
    expect(invPhase).toEqual(normalTestPhase.split("").reverse().join(""));
  });

});


