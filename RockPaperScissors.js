/*
* This program plays rock paper scissors with a computer.
*
* @author  Douglass Jeffrey
* @version 1.0
* @since   2020-12-04
* Class RockPaperScissors.
*/

// Imports prompt
// NOTE: you must have installed prompt-sync
const prompt = require('prompt-sync')({sigint: true});

/**
* Function to determine the outcome of the rock paper scissors match. 
* receives integer information from main and rolldie to decide match.
*/
function rpsLogicFunction(userIntRps, rolledInt) {
  // defines variable that will hold the outcome of the match
  let finalIntAns = 0;
  // computer and user tie
  if (rolledInt == userIntRps) {
    finalIntAns = 3;
  } else if ((userIntRps == 1) && (rolledInt == 3)) {
    // user wins rock over scissors
    finalIntAns = 1;
  } else if ((userIntRps == 2) && (rolledInt == 1)) {
    // user wins paper over rock
    finalIntAns = 1;
  } else if ((userIntRps == 3) && (rolledInt == 2)) {
    // user wins scissors over paper
    finalIntAns = 1;
  } else if ((userIntRps == 1) && (rolledInt == 2)) {
    // computer wins paper over rock
    finalIntAns = 2;
  } else if ((userIntRps == 2) && (rolledInt == 3)) {
    // computer wins scissors over paper
    finalIntAns = 2;
  } else if ((userIntRps == 3) && (rolledInt == 1)) {
    // computer wins rock over scissors
    finalIntAns = 2;
  }
  return finalIntAns;
}

/**
* Function gets random number and states random generated numbers
* correlating symbol in rock paper scissors. Also calls logic function.
*/
function rollDie(userIntRps) {
  // generates random number
  const rolledInt = Math.floor(Math.random() * ((4 - 1))+ 1);
  
  //determines whether the computer picked rock paper or scissors
  if (rolledInt == 1) {
    console.log('Computer chose Rock');
  } else if (rolledInt == 2) {
    console.log('Computer chose Paper');
  } else if (rolledInt == 3) {
    console.log('Computer chose Scissors');
  }
  
  // prints out user inputted number and computer generated number
  // console.log(userIntRps);
  // console.log(rolledInt);
  
  // Calls logic function
  const compAns = rpsLogicFunction(userIntRps, rolledInt);
  // returns integer answer from logic function
  return compAns;
}

/**
* Main function receives users input in form of rock paper or scissors and 
* converts it to integer data to send off to other function. Eventually receives
* information that allows it to determine the outcome of the rock paper 
* scissors match.
*/ 

// creates variable to store users data
let userIntRps = 0;

// Accepts user length input in str form
const lowInputRps = prompt('Welcome to rock paper scissors! Enter either rock, '
                         + 'paper or scissors to play: ');

// converts string to uppercase to catch misinputs of capitals
const inputRps = lowInputRps.toUpperCase();

// converts string input to data value
if (inputRps == ('ROCK')) {
  userIntRps = 1;
} else if (inputRps == ('PAPER')) {
  userIntRps = 2;
} else if (inputRps == ('SCISSORS')) {
  userIntRps = 3;
} else {
  // catches invalid answers in same way as try catch then ends program
  console.log('Invalid Input');
  return;
}

// receives information from RollDie which itself receives info from rPS.
const finalAns = rollDie(userIntRps);
  
//prints outcome of match after receiving info from rpsLogicFunction
if (finalAns == 1) {
  console.log('You Won!');
} else if (finalAns == 2) {
  console.log('You Lost!');
} else if (finalAns == 3) {
  console.log('You tied!');
}
