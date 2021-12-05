import readlineSync from 'readline-sync';

export default function userName() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name} !`);

  return name
}

export function randomNumber() {
  const rand = Math.floor(Math.random() * 101);
  console.log(`Question: ${rand}`);
  const answer = readlineSync.question(`Your answer: `);

  return ({answer, rand});
}

export function numberIsEvent(name){
  const { answer, rand }  = randomNumber();
  let index = 0;
  if((rand % 2 === 0) && (answer === 'yes')) {
    console.log('Correct!');
    randomNumber()
    index++;
  } else if ((rand % 2 !== 0) && (answer === 'no')) {
    console.log('Correct!');
    randomNumber()
    index++;
  } else if ((answer !== 'yes') && (answer !== 'no') || ((rand % 2 === 0) && (answer === 'no')) || ((rand % 2 !== 0) && (answer === 'yes'))){
    const trueAnswer = rand % 2 === 0 ? 'yes' : 'no';
    console.log(`${answer} is wrong answer ;(. Correct answer was ${trueAnswer}.\nLet's try again, ${name}!)`);
  }
  return index;
}

export function gameNumberIsEvent() {
  const  name = userName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

 const index = numberIsEvent(answer, rand, name);

 if(index > 3){
   randomNumber();
   numberIsEvent();
 }
}
