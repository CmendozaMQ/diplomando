import { Calculadora } from "../src/calculadora";
import { Task } from "../../04-lab1-tasks/src/task";

test.skip('adds 1 + 2 to equal 3', () => {
    // expect(sum(1, 2)).toBe(3);
    const calc = new Calculadora();

    //actual
    const actual = calc.sumNumber(1, 2);

    //expected
    const expc = 3;

    expect(actual).toBe(expc);
});

test.skip('adds 1 - 2 to equal -1', () => {
    //TDD 

    //const resNumb = jest.fn((a: number, b: number) => -1);
    const calc = new Calculadora();

    //actual
    const actual = calc.resNumb(1, 2);

    //expected
    const expc = -1;

    expect(actual).toBe(expc);
    //expect(actual).toBeTruthy()
});

test.skip('retornar el numero mas grande', () => {
    //TDD 
    const input = [2, 88, 65, 17, 95, 39];
    const greatterNumber = jest.fn((input: number[]) => 95);
    //const calc = new Calculadora();

    //actual
    //const actual = Calculadora.greatterNumberDev(input);
    const actual = greatterNumber(input);

    //expected
    const expc = 95;

    expect(actual).toBeGreaterThanOrEqual(expc);
    //expect(actual).toBeTruthy()
});

test('retornar si numero es par', () => {
    //TDD 

    // Input
    const input = 16;
    //const esPar = jest.fn((input: number) => true);
    //const calc = new Calculadora();

    //Do the action
    //const actual = esPar(input);
    const actual = Task.esPar(input);

    //expected
    //const expc = true;

    //Validations
    expect(actual).toBeTruthy();
    //expect(actual).toBeTruthy()
});





const dd = 'He-Fl-o';
console.log(dd.split('-'));
