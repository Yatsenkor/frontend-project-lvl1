import getRandomNumber from '../common.js';
import runGame from '../index.js';

const getGCD = (number1, number2) => {
  if (!number2) {
    return number1;
  }
  return getGCD(number2, number1 % number2);
};

const description = 'Find the greatest common divisor of given numbers.';
const getGameData = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const question = `${number1} ${number2}`;
  const answer = getGCD(number1, number2);
  return [question, String(answer)];
};

const brainGCD = () => runGame(description, getGameData);

export default brainGCD;
