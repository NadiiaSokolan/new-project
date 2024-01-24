const sum = require('./sum');
const sub = require("./sub");

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('sub 5 - 3 to equal 2', () => {
    expect(sub(5, 3)).toBe(2);
});