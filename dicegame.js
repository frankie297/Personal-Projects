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
  if (diceArray[0] === diceArray[1]) {
    console.log(`You rolled ${diceSum}, You super win!`);
  } else if (diceSum % 2 == 0) {
    console.log(`You rolled ${diceSum}, You win!`);
  } else {
    console.log(`You rolled ${diceSum}, You lose!`);
  };
}

//first two elements in process.argv array always is ['path/to/node.exe', 'path/to/js/file', ...]
const myArgs = process.argv.slice(2);

const gameResult = playGame(myArgs[0], myArgs[1]);

module.exports = generateDice;
module.exports = diceAmount;
