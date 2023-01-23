const myFunctions = require('./index.js');   // import index.js

// -------------- SUM TESTING --------------
test('Testing sum 0 (two positive numbers) -- success', () => {
  const target = 30;
  const result = myFunctions.sum(12, 18);
  expect(target).toBe(result);
});

test('Testing sum 1 (one negative number)-- success', () => {
    const target = -5;
    const result = myFunctions.sum(5, -10);
    expect(target).toBe(result);
});

test('Testing sum 2 (one non-number)-- success', () => {
    expect(() => {
        myFunctions.sum('t', 3);
    }).toThrow('a and/or b is not a number');
});

test('Testing sum 3 (one non-number)-- success', () => {
    expect(() => {
        myFunctions.sum(5, '$');
    }).toThrow('a and/or b is not a number');
});

test('Testing sum 4 (two non-numbers)-- success', () => {
    expect(() => {
        myFunctions.sum('text', '0');
    }).toThrow('a and/or b is not a number');
});

test('Testing sum 5 (one undefined)-- success', () => {
    expect(() => {
        myFunctions.sum(undefined, 3);
    }).toThrow('a and/or b is not a number');
});

test('Testing sum 6 (one undefined)-- success', () => {
    expect(() => {
        myFunctions.sum(-7, undefined);
    }).toThrow('a and/or b is not a number');
});

test('Testing sum 7 (two undefineds)-- success', () => {
    expect(() => {
        myFunctions.sum(undefined, undefined);
    }).toThrow('a and/or b is not a number');
});

test('Testing sum 8 (one undefined, one letter)-- success', () => {
    expect(() => {
        myFunctions.sum(undefined, 'ew');
    }).toThrow('a and/or b is not a number');
});

test('Testing sum 9 (two floats)-- success', () => {
    const target = 30.0;
    const result = myFunctions.sum(11.5, 18.5);
    expect(target).toBe(result);
});

test('Testing sum 10 (one float)-- success', () => {
    const target = 30.0;
    const result = myFunctions.sum(12, 18.0);
    expect(target).toBe(result);
});

// -------------- DIV TESTING --------------
test('Testing div 0 (two positive numbers) -- success', () => {
    const target = 6;
    const result = myFunctions.div(18, 3);
    expect(target).toBe(result);
});

test('Testing div 1 (one negative number)-- success', () => {
    const target = -0.5;
    const result = myFunctions.div(5, -10);
    expect(target).toBe(result);
});

test('Testing div 2 (one non-number)-- success', () => {
    expect(() => {
        myFunctions.div('t', 3);
    }).toThrow('a and/or b is not a number');
});

test('Testing div 3 (one non-number)-- success', () => {
    expect(() => {
        myFunctions.div(5, '$');
    }).toThrow('a and/or b is not a number');
});

test('Testing div 4 (two non-numbers)-- success', () => {
    expect(() => {
        myFunctions.div('text', '0');
    }).toThrow('a and/or b is not a number');
});

test('Testing div 5 (one undefined)-- success', () => {
    expect(() => {
        myFunctions.div(undefined, 3);
    }).toThrow('a and/or b is not a number');
});

test('Testing div 6 (one undefined)-- success', () => {
    expect(() => {
        myFunctions.div(-7, undefined);
    }).toThrow('a and/or b is not a number');
});

test('Testing div 7 (two undefineds)-- success', () => {
    expect(() => {
        myFunctions.div(undefined, undefined);
    }).toThrow('a and/or b is not a number');
});

test('Testing div 8 (one undefined, one letter)-- success', () => {
    expect(() => {
        myFunctions.div(undefined, 'ew');
    }).toThrow('a and/or b is not a number');
});

test('Testing div 9 (two floats)-- success', () => {
    const target = 1.5;
    const result = myFunctions.div(8.25, 5.5);
    expect(target).toBe(result);
});

test('Testing div 10 (one float)-- success', () => {
    const target = 6.0;
    const result = myFunctions.div(18.0, 3);
    expect(target).toBe(result);
});

// -------------- CONTAINSNUMBERS TESTING --------------
test('Testing containsNumbers 0 (string w/o numbers) -- success', () => {
    const target = false;
    const result = myFunctions.containsNumbers('hello');
    expect(target).toBe(result);
});

test('Testing containsNumbers 1 (string w/ numbers)-- success', () => {
    const target = true;
    const result = myFunctions.containsNumbers('h3ll0');
    expect(target).toBe(result);
});

test('Testing containsNumbers 2 (string w/o numbers )-- success', () => {
    const target = false;
    const result = myFunctions.containsNumbers('hello!');
    expect(target).toBe(result);
});

test('Testing containsNumbers 3 (undefined)-- success', () => {
    expect(() => {
        myFunctions.containsNumbers(undefined);
    }).toThrow('text is not a string');
});

test('Testing containsNumbers 4 (string w/ number)-- success', () => {
    const target = true;
    const result = myFunctions.containsNumbers('h3llo');
    expect(target).toBe(result);
});

test('Testing containsNumbers 5 (not a string)-- success', () => {
    expect(() => {
        myFunctions.containsNumbers(3);
    }).toThrow('text is not a string');
});

test('Testing containsNumbers 6 (string of numbers)-- success', () => {
    const target = true;
    const result = myFunctions.containsNumbers('12345');
    expect(target).toBe(result);
});

test('Testing containsNumbers 7 (not a string)-- success', () => {
    expect(() => {
        myFunctions.containsNumbers(12345);
    }).toThrow('text is not a string');
});

test('Testing containsNumbers 8 (empty string)-- success', () => {
    const target = false;
    const result = myFunctions.containsNumbers('');
    expect(target).toBe(result);
});

test('Testing containsNumbers 9 (string of one letter)-- success', () => {
    const target = false;
    const result = myFunctions.containsNumbers('f');
    expect(target).toBe(result);
});

test('Testing containsNumbers 10 (string of one number)-- success', () => {
    const target = true;
    const result = myFunctions.containsNumbers('5');
    expect(target).toBe(result);
});