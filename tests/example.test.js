import '@testing-library/jest-dom';

import { calculateIVA, getUser, greet, invertedPhrase, randomRange } from '../src/utils/funcionsHelp';

describe('creacion de test de ejemplo', () => {

  test('verifica que dos strings coincidan', ()=>{
    const nombre='Jade Franco';
    expect(nombre).toEqual('Jade Franco');
  });

  test('verifica que se haga un saludo', ()=>{
    const name='Jade';
    const saludo=greet('Jade');
    expect(saludo).toEqual(`Hola, ${name}!. Saludos`)
  });

  test('verifica que los números estén dentro del rango especificado', ()=>{
    const numMax=17;
    const numMin=3;
    const randomNumber=randomRange(numMin, numMax);
    // console.log(randomNumber);
    expect(randomNumber).toBeLessThanOrEqual(numMax);
    expect(randomNumber).toBeGreaterThanOrEqual(numMin);
  });

  test('verifica que se calcule un IVA igual a 16%', ()=>{
    const iva=.16;
    const monto=100;
    const montoCalculado=calculateIVA(monto);
    expect(montoCalculado).toEqual(monto*iva);
  });

  test('verifica que un elemento esté o no contenido en un arreglo', ()=>{
    const month='april';
    const months=['january', 'february', 'march', 'november'];
    const monthsApril=['january', 'february', 'march', 'november', 'april'];
    expect(months).not.toContain(month);
    expect(monthsApril).toContain(month);
  });

  test('verifica que un objeto sea igual a otro', ()=>{
    const jade={
      id: 4321,
      username: 'JadeFrac'
    };
    const usuario=getUser(jade.id, jade.username);
    expect(usuario).toMatchObject(jade);
  });

  test('verifica que se voltee una cadena de texto', ()=>{
    const phraseOne='Hala Madrid';
    const phraseInverted=invertedPhrase(phraseOne);
    expect(phraseInverted).toEqual(phraseOne.split('').reverse().join(''));
  });

  // test('Que los string coincidan', () => {
  //   const name = 'Miguel Andres';
  //   expect(name).toEqual('Miguel Andres');
  // });

  // test('deberia mandar un saludo al nombre', () => {
  //   const name = 'Miguel Andres';
  //   const greetAction = greet(name);
  //   expect(greetAction).toContain(name);
  // });

  // test('deberia cumplir el rango en el random', () => {
  //   const max = 20;
  //   const min = 10;
  //   const randomNumber = randomRange(max, min);
  //   expect(randomNumber).toBeLessThanOrEqual(max);
  //   expect(randomNumber).toBeGreaterThanOrEqual(min);
  // });

  // test('deberia calcular el iva del monto ingresado en 16%', () => {
  //   const mount = 20;
  //   const tax = calculateIVA(mount);
  //   expect(tax).toEqual(mount * 0.16);
  // });

  // test('debería contener el mes de abril', () => {
  //   const newMonth = 'abril';
  //   const months = ['enero', 'febrero', 'marzo'];
  //   // const newArray=months.push(newMonth);
  //   expect(months).not.toContain(newMonth)
  // });

  // test('deberia recibir los mismos datos de usuario', () => {
  //   const testUser = {
  //     id: 1234,
  //     username: 'oscar'
  //   }
  //   const user = getUser(testUser.id, testUser.username);
  //   expect(user).toMatchObject(testUser);
  // });

  // test('deberia recibir la frase al reves', () => {
  //   const normalTestPhase = "Hola estoy en clase";
  //   const invPhase = invertedPhase(normalTestPhase);
  //   expect(invPhase).toEqual(normalTestPhase.split("").reverse().join(""));
  // });

});


