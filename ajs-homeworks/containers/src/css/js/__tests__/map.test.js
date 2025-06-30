import ErrorRepository from '../map';

test('test error 1', () => {
    const error = new ErrorRepository();
    expect(error.translate(1)).toBe('ERR_INVALID_TRADE_PARAMETERS');
});

test('test error 2', () => {
    const error = new ErrorRepository();
    expect(error.translate(2)).toBe('ERR_NOT_ENOUGH_RIGHTS');
});

test('test error 3', () => {
    const error = new ErrorRepository();
    expect(error.translate(3)).toBe('ERR_UNKNOWN_COMMAND');
});

test('non-existent error test ', () => {
    const error = new ErrorRepository();
    expect(error.translate(8)).toBe('Unknown error');
});