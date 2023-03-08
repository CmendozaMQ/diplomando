describe('First Test',() => {
    test.skip('test 1', async () => {
        console.log('Running our 1st test');
        const expectValue = '0';
        const actualValue = '0';
        expect(actualValue).toEqual(expectValue);
    });

    test.skip('test 2', async () => {
      console.log('Running our 2nd test');
      const expectValue = '0';

      //Create a Mock variable
      const returnZero = jest.fn(param => '0');
      const actualValue = returnZero(true);

      expect(actualValue).toEqual(expectValue);
  });
});
