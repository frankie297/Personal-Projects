const dice1 = [1,2,3,4,5,6];
const dice2 = [1,2,3,4,5,6];

console.log("rolling dice");

let dice1rand = dice1[Math.floor(Math.random() * dice1.length)];
let dice2rand = dice2[Math.floor(Math.random() * dice2.length)];
let diceSum = dice1rand + dice2rand;

// if (dice1rand === dice2rand) {
//   return console.log(`You rolled ${dice1rand} and ${dice2rand}, you super win!`);
// } else if (diceSum % 2 == 0) {
//   return console.log(`You rolled ${diceSum}, you win!`);
// } else {
//   return console.log(`You rolled ${diceSum}, roll again!`);
// };

let result = () =>
  dice1rand === dice2rand ? `You rolled ${dice1rand} and ${dice2rand}, you super win!`
  : diceSum % 2 == 0 ? `You rolled ${diceSum}, you win!`
  : `You rolled ${diceSum}, roll again!`;

console.log(result());
