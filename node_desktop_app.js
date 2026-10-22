import chalk from 'chalk';
import { randomInt } from 'crypto';

import prompts from 'prompts';
 
// 2. Display the game title, instructions, and rules, using the external package chalk.
console.log(chalk.magenta("welcome to the guessing random number number game"));
console.log(chalk.yellow("you have 3 tries to guess a number between 1-10"));

// 3. The guessing game must generate a random secret number between 1 and 10. 
// To do so, use the randomInt function available in the native module crypto. 
const random_number = randomInt(1,11); 
// 4. Create a constant to hold the maximum number of attempts. 
var attempt_counter  = 0 ;
var user_lifes = 3 ; 
// 5. Use the external package prompts to create an interactive game. Ask the player 
// to enter a number between 1 and 10.  
while( attempt_counter < 3){

const response = await prompts({
  type: 'number',
  name: 'guess',
  message: 'Enter a number between 1 and 10:'
});

console.log(chalk.blue(`You entered: ${response.guess}`));

if(response.guess != random_number){
console.log(chalk.red(`that is the wrong number try again`));
attempt_counter++;
user_lifes--;
}else if(response.guess == random_number){
console.log(chalk.yellow(`that is the correct number!`));
break;
}
console.log(chalk.yellow(`you have ${user_lifes} lifes left `));

}