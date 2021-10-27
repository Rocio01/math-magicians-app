import calculate from '../logic/calculate';

let calcObj = { total: '0', next: null, operation: null };

beforeEach(() => {
  calcObj = { total: '0', next: null, operation: null };
});

describe('it tests the addition function properly', () => {
  test('it retrieves the correct number', () => {
    calcObj = calculate(calcObj, '1');
    calcObj = calculate(calcObj, '+');
    calcObj = calculate(calcObj, '5');
    calcObj = calculate(calcObj, '=');
    expect(calcObj.total).not.toBe('8');
  });

  test('it adds integer numbers', () => {
    calcObj = calculate(calcObj, '1');
    calcObj = calculate(calcObj, '+');
    calcObj = calculate(calcObj, '5');
    calcObj = calculate(calcObj, '=');
    expect(calcObj.total).toBe('6');
  });

  test('it works with decimal numbers', () => {
    calcObj = calculate(calcObj, '1');
    calcObj = calculate(calcObj, '.');
    calcObj = calculate(calcObj, '5');
    calcObj = calculate(calcObj, '+');
    calcObj = calculate(calcObj, '2');
    calcObj = calculate(calcObj, '.');
    calcObj = calculate(calcObj, '1');
    calcObj = calculate(calcObj, '=');
    expect(calcObj.total).toBe('3.6');
  });

  test('it retrieves the correct decimal numbers', () => {
    calcObj = calculate(calcObj, '2');
    calcObj = calculate(calcObj, '.');
    calcObj = calculate(calcObj, '5');
    calcObj = calculate(calcObj, '+');
    calcObj = calculate(calcObj, '2');
    calcObj = calculate(calcObj, '.');
    calcObj = calculate(calcObj, '1');
    calcObj = calculate(calcObj, '=');
    expect(calcObj.total).not.toBe('3.6');
  });
});

describe('it tests the substraction to function properly', () => {
  test('it retrieves the correct number', () => {
    calcObj = calculate(calcObj, '8');
    calcObj = calculate(calcObj, '-');
    calcObj = calculate(calcObj, '5');
    calcObj = calculate(calcObj, '=');
    expect(calcObj.total).not.toBe('2');
  });

  test('it adds integer numbers', () => {
    calcObj = calculate(calcObj, '5');
    calcObj = calculate(calcObj, '-');
    calcObj = calculate(calcObj, '2');
    calcObj = calculate(calcObj, '=');
    expect(calcObj.total).toBe('3');
  });

  test('it works with decimal numbers', () => {
    calcObj = calculate(calcObj, '4');
    calcObj = calculate(calcObj, '.');
    calcObj = calculate(calcObj, '5');
    calcObj = calculate(calcObj, '-');
    calcObj = calculate(calcObj, '2');
    calcObj = calculate(calcObj, '.');
    calcObj = calculate(calcObj, '1');
    calcObj = calculate(calcObj, '=');
    expect(calcObj.total).toBe('2.4');
  });

  test('it retrieves the correct decimal numbers', () => {
    calcObj = calculate(calcObj, '2');
    calcObj = calculate(calcObj, '.');
    calcObj = calculate(calcObj, '5');
    calcObj = calculate(calcObj, '-');
    calcObj = calculate(calcObj, '2');
    calcObj = calculate(calcObj, '.');
    calcObj = calculate(calcObj, '1');
    calcObj = calculate(calcObj, '=');
    expect(calcObj.total).not.toBe('3.6');
  });
});

describe('it tests the multiplication function properly', () => {
  test('it retrieves the correct number', () => {
    calcObj = calculate(calcObj, '2');
    calcObj = calculate(calcObj, 'x');
    calcObj = calculate(calcObj, '5');
    calcObj = calculate(calcObj, '=');
    expect(calcObj.total).not.toBe('50');
  });

  test('it multiply integer numbers', () => {
    calcObj = calculate(calcObj, '2');
    calcObj = calculate(calcObj, 'x');
    calcObj = calculate(calcObj, '3');
    calcObj = calculate(calcObj, '=');
    expect(calcObj.total).toBe('6');
  });

  test('it works with decimal numbers', () => {
    calcObj = calculate(calcObj, '1');
    calcObj = calculate(calcObj, '.');
    calcObj = calculate(calcObj, '5');
    calcObj = calculate(calcObj, 'x');
    calcObj = calculate(calcObj, '2');
    calcObj = calculate(calcObj, '.');
    calcObj = calculate(calcObj, '1');
    calcObj = calculate(calcObj, '=');
    expect(calcObj.total).toBe('3.15');
  });

  test('it retrieves the correct decimal number', () => {
    calcObj = calculate(calcObj, '1');
    calcObj = calculate(calcObj, '.');
    calcObj = calculate(calcObj, '5');
    calcObj = calculate(calcObj, 'x');
    calcObj = calculate(calcObj, '2');
    calcObj = calculate(calcObj, '.');
    calcObj = calculate(calcObj, '1');
    calcObj = calculate(calcObj, '=');
    expect(calcObj.total).not.toBe('3.6');
  });
});

describe('it tests the division function properly', () => {
  test('it retrieves the correct number', () => {
    calcObj = calculate(calcObj, '10');
    calcObj = calculate(calcObj, '÷');
    calcObj = calculate(calcObj, '2');
    calcObj = calculate(calcObj, '=');
    expect(calcObj.total).not.toBe('8');
  });

  test('it divides integer numbers', () => {
    calcObj = calculate(calcObj, '10');
    calcObj = calculate(calcObj, '÷');
    calcObj = calculate(calcObj, '5');
    calcObj = calculate(calcObj, '=');
    expect(calcObj.total).toBe('2');
  });

  test('it works with decimal numbers', () => {
    calcObj = calculate(calcObj, '8');
    calcObj = calculate(calcObj, '.');
    calcObj = calculate(calcObj, '5');
    calcObj = calculate(calcObj, '÷');
    calcObj = calculate(calcObj, '2');
    calcObj = calculate(calcObj, '.');
    calcObj = calculate(calcObj, '1');
    calcObj = calculate(calcObj, '=');
    expect(calcObj.total).toBe('4.04761904761904761905');
  });

  test('it retrieves the correct decimal number', () => {
    calcObj = calculate(calcObj, '1');
    calcObj = calculate(calcObj, '.');
    calcObj = calculate(calcObj, '5');
    calcObj = calculate(calcObj, '÷');
    calcObj = calculate(calcObj, '1');
    calcObj = calculate(calcObj, '.');
    calcObj = calculate(calcObj, '1');
    calcObj = calculate(calcObj, '=');
    expect(calcObj.total).not.toBe('3.6');
  });

  test("Can't divide by 0", () => {
    calcObj = calculate(calcObj, '10');
    calcObj = calculate(calcObj, '÷');
    calcObj = calculate(calcObj, '0');
    calcObj = calculate(calcObj, '=');
    expect(calcObj.total).toBe("Can't divide by 0.");
  });
});

describe('it tests the sign change', ()=>{
  test('it changes the + sign of a single number', () => {
    calcObj = calculate(calcObj, '10');
    calcObj = calculate(calcObj, '+/-');
    expect(calcObj.next).toBe('-10');
  });

  test('it changes the + sign of a nomber after an operation', () => {
    calcObj = calculate(calcObj, '10');
    calcObj = calculate(calcObj, '+');
    calcObj = calculate(calcObj, '2');
    calcObj = calculate(calcObj, '=');
    calcObj = calculate(calcObj, '+/-');
    expect(calcObj.total).toBe('-12');
  });

  test('it changes the - sign of a single number', () => {
    calcObj = calculate(calcObj, '-10');
    calcObj = calculate(calcObj, '+/-');
    expect(calcObj.next).toBe('10');
  });

  test('it changes the - sign of a nomber after an operation', () => {
    calcObj = calculate(calcObj, '10');
    calcObj = calculate(calcObj, '-');
    calcObj = calculate(calcObj, '20');
    calcObj = calculate(calcObj, '=');
    calcObj = calculate(calcObj, '+/-');
    expect(calcObj.total).toBe('10');
  });

  test('it retrieves the correct altered number', () => {
    calcObj = calculate(calcObj, '20');
    calcObj = calculate(calcObj, '+/-');
    expect(calcObj.next).not.toBe('-15');
  });  
});

describe('it tests the mod operation', ()=>{
  test('it gives the proper mod', ()=>{
    calcObj = calculate(calcObj, '10');
    calcObj = calculate(calcObj, '%');
    calcObj = calculate(calcObj, '2');
    calcObj = calculate(calcObj, '=');
    expect(calcObj.total).toBe('0');
  });

  test('it gives the proper mod', ()=>{
    calcObj = calculate(calcObj, '10');
    calcObj = calculate(calcObj, '%');
    calcObj = calculate(calcObj, '3');
    calcObj = calculate(calcObj, '=');
    expect(calcObj.total).not.toBe('0');
  });
});
