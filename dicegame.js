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
  for (let die = 0; die < number; die++) {
    dice.push(generateDice(sides));
  }
  return dice;
}

const playGame = (sides, number) => {
  const diceArray = diceAmount(sides, number);
  const diceSum = diceArray.reduce((accumulator, currentValue) => accumulator + currentValue);
  if (diceSum % 2 == 0) {
    console.log(`You rolled ${diceSum}, You win!`);
  } else {
    console.log(`You rolled ${diceSum}, You lose!`);
  };
}

const myArgs = process.argv.slice(2);

const gameResult = playGame(myArgs[0], myArgs[1]);
