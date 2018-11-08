// what are the differences and advantages of let vs const or var?
// how many functions have you used? How many could you use?
// how would you structure this as one or more functions?
// what is the difference between Functional, Object-Oriented and Procedural Programming?
// how could you make this DRY and adaptable to different numbers of dice and dice types?

const generateDice = (sides) => {
  const number = Math.floor(Math.random() * sides + 1)
  return number;
}

const diceAmount = (sides,number) => {
  const dice = [];
  for (die = 0; die < number; die++) {
    dice.push(generateDice(sides));
  }
  return dice;
}

const playGame = (sides, number) => {
  const diceArray = diceAmount(sides, number);
  const diceSum = diceArray.reduce((accumulator, currentValue) => accumulator + currentValue);
  return diceSum;
}

console.log(playGame(6,3))


// process.argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });

// if (dice1rand === dice2rand) {
//   return console.log(`You rolled ${dice1rand} and ${dice2rand}, you super win!`);
// } else if (diceSum % 2 == 0) {
//   return console.log(`You rolled ${diceSum}, you win!`);
// } else {
//   return console.log(`You rolled ${diceSum}, roll again!`);
// };

// const result = () =>
//   dice1rand === dice2rand ? `You rolled ${dice1rand} and ${dice2rand}, you super win!`
//   : diceSum % 2 == 0 ? `You rolled ${diceSum}, you win!`
//   : `You rolled ${diceSum}, roll again!`;
//
