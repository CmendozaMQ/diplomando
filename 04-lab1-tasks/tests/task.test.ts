test('task 3', () => {
    //TDD 
    const input = 'HeFlo';
    const task3 = jest.fn((input: string) => ['H', 'e', 'F', 'l', 'o']);
    //const calc = new Calculadora();

    //actual
    const actual = task3(input);
    

    //expected ffff
    const expc = ['H', 'e', 'F', 'l', 'o'];


    expect(actual).toEqual(expc);
    //expect(actual).toBeTruthy()
});