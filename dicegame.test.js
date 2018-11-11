const generateDice = require('./dicegame');
const diceAmount = require('./dicegame');

test('generate a random number from a die', () => {
  const result = generateDice(6);
  expect(result).toBeGreaterThanOrEqual(result);
  expect(result).toBeLessThanOrEqual(result);
});

test('return the numbers rolled', () => {
  const resultRoll = diceAmount(6, 2);
  expect(resultRoll).toContain(resultRoll);
});
