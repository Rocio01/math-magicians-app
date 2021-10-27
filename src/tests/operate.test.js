import operate from '../logic/operate';

describe('tests for ADD operation', () => {
  test('it expects 2 + 5 to be 7', () => {
    expect(operate(2, 5, '+')).toEqual('7');
  });
});

describe('tests for SUB operation', () => {
  test('it expects 10 - 5 to be 5', () => {
    expect(operate(10, 5, '-')).toEqual('5');
  });
});

describe('tests for MULT operation', () => {
  test('it expects 10 x 5 to be 50', () => {
    expect(operate(10, 5, 'x')).toEqual('50');
  });
});

describe('tests for DIV operation', () => {
  test('it expects 10 ÷ 5 to be 2', () => {
    expect(operate(10, 5, '÷')).toEqual('2');
  });

  test('it expects to throw an error if divided by 0', () => {
    expect(operate(20, 0, '÷')).toBe("Can't divide by 0.");
  });
});

describe('tests for MOD operation', () => {
  test('it expects 10 % 5 to be 0', () => {
    expect(operate(10, 5, '%')).toEqual('0');
  });

  test('it expects 10 % 3 to be 1', () => {
    expect(operate(10, 3, '%')).toEqual('1');
  });
});
