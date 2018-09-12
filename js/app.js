'use strict';
var finalAnswer = '';
var playerName = prompt('What is your name?');
console.log('The players name is ' + playerName + '.');
var rogerServerAnswer = prompt('Hi ' + playerName + ', does Roger run his own Trade Wars 2002 Server?');
console.log(playerName + ' answered' + rogerServerAnswer + '.');
finalAnswer = finalAnswer + playerName + ' ';
var playerKnowTw = prompt('Do you know what Trade Wars 2002 is ' + playerName + '?');
var playerKnowTwProper = playerKnowTw.toUpperCase();

if ((playerKnowTwProper === 'YES') || (playerKnowTwProper === 'Y')) {
  console.log(playerName + ', knows the game of Trade Wars 2002.');
  alert('Great.  On to the next question.');
  finalAnswer = finalAnswer + ', knows old games,';
} else {
  console.log(playerName + ' knows nothing about Trade Wars 2002.  What a shame!');
  alert('That is to bad.  We will give you a chance to ask for more inforamtion later');
  finalAnswer = finalAnswer + 'does not know old games,';
}

var bestMovieEver = prompt('Is Star Wars the BEST Series Ever?');
var bestMovieEverProper = bestMovieEver.toUpperCase();
if ((bestMovieEverProper === 'YES') || (bestMovieEver === 'Y')) {
  console.log(playerName + ' is a TRUE Star Wars fan!');
  alert('I don\'t care what John says about you, your a good apple in my book!');
  finalAnswer = finalAnswer + ' loves Star Wars, ';
} else {
  console.log(playerName + ' is probably a Trekie.  DOWN with the Trekie!!!');
  alert('Maybe John was right about you ' + playerName + '.');
  finalAnswer = finalAnswer + ' looks like a Wookie, ';
}

var playGuessingGame = prompt('Do you want to play a guessing game?');
var playGuessingGameProper = playGuessingGame.toUpperCase();
if ((playGuessingGameProper === 'NO') || (playGuessingGameProper === 'N')) {
  console.log(playerName + ' does not want to play a guessing game');
  alert('Ok, on to the final question');
  finalAnswer = finalAnswer + ' hates games, ';
} else {
  finalAnswer = finalAnswer + ' loves games, ';
  var actualNumberOfWins = 11;
  var numberOfWins = prompt('How many National Championship Games has Roger Won (HINT:  Less than 20)');
  if (numberOfWins > 20) {
    console.log(playerName + ' guessed more than the max');
    alert(playerName + 'you had one chance nad you BLEW IT. Should have red the HINT');
  } else {
    if (parseInt(numberOfWins) === actualNumberOfWins){
      console.log(playerName + ' is a great guesser');
      alert('If there was a grand prze, you would have won it');
      finalAnswer = finalAnswer + ' is a great guesser, ';
    } else {
      finalAnswer = finalAnswer + ' not a great guesser, ';
    }

    var gameFun = prompt('Was that Super Fun?');
    var gameFunProper = gameFun.toUpperCase();
    if ((gameFunProper === 'YES') || (gameFunProper === 'Y')) {
      console.log(playerName + ' REALLY likes games');
      finalAnswer - finalAnswer + ' REALLY REALLY likes games, ';
    } else {
      console.log(playerName + ' must not like guessing games');
      finalAnswer = finalAnswer + ' not a a fan of guessing games, ';
    }
  }
}
var additionalInformation = prompt('Do you want additional information on Trade Wars 2002?');
var additionalInformationProper = additionalInformation.toUpperCase();
if (additionalInformationProper === 'YES') {
  console.log('Request for additional information requested');
  alert('We will talk about this later');
  finalAnswer = finalAnswer + ' and wants additional information on Trade Wars 2002.';
} else {
  console.log(playerName + ' did not request additional information');
  finalAnswer = finalAnswer + ', no additional information.';
}
alert(finalAnswer);
