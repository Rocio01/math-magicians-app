import calculate from "../logic/calculate";

let calcObj = { total: '0', next: null, operation: null };

beforeEach(() => {
  calcObj = { total: '0', next: null, operation: null };
});

describe('it tests the addition function properly', () => {
  test('it retrieves the correct number', ()=>{
    calcObj = calculate(calcObj, '1');
    calcObj = calculate(calcObj, '+');
    calcObj = calculate(calcObj, '5');
    calcObj = calculate(calcObj, '=');
    expect(calcObj.total).not.toBe('8');
  });

  test('it adds integer numbers', ()=>{
    calcObj = calculate(calcObj, '1');
    calcObj = calculate(calcObj, '+');
    calcObj = calculate(calcObj, '5');
    calcObj = calculate(calcObj, '=');
    expect(calcObj.total).toBe('6');
  });

  test('it works with decimal numbers', ()=>{
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
});

describe('it tests the substraction to function properly', ()=>{
  test('it retrieves the correct number', ()=>{
    calcObj = calculate(calcObj, '8');
    calcObj = calculate(calcObj, '-');
    calcObj = calculate(calcObj, '5');
    calcObj = calculate(calcObj, '=');
    expect(calcObj.total).not.toBe('2');
  });

  test('it adds integer numbers', ()=>{
    calcObj = calculate(calcObj, '5');
    calcObj = calculate(calcObj, '-');
    calcObj = calculate(calcObj, '2');
    calcObj = calculate(calcObj, '=');
    expect(calcObj.total).toBe('3');
  });

  test('it works with decimal numbers', ()=>{
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
});
