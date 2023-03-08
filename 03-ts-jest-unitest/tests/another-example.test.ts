

describe('Run Callback', () => {
    const callbackMock = jest.fn();

    test.skip('should run callback(< 100)', () => {
        runCallback(19, callbackMock);

        expect(callbackMock).toBeCalled();
        expect(callbackMock).toBeCalledTimes(1);
        expect(callbackMock).toBeCalledWith(95);
    });

    test.skip('should not run callback( >= 100)', () => {
        runCallback(20, callbackMock);

        expect(callbackMock).not.toBeCalled();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
});

function runCallback(arg0: number, callbackMock: jest.Mock<any, any, any>) {
  throw new Error("Function not implemented.");
}
