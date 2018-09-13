'use strict';

var totalWrong = 0
var userMessage = '';
askQuestion1();
askQuestion2();
askQuestion3();
askQuestion4();
askQuestion5();
askQuestion6();
askQuestion7();

function askQuestion1() {
  var question1 = prompt('Is Roger a Dog Lover?');
  question1 = question1.toUpperCase();
  switch(question1) {
    case 'NO':
      totalWrong++;
      console.log('Wrong Answer. User has entered no for Q1 with ' + totalWrong + ' wrong answers.');
      userMessage = 'Nice Try! Well not realy, just trying to be nice!';
      break;
    case 'YES':
      console.log('Correct Answer. User has entered yes for Q1 with ' + totalWrong + ' wrong answers.');
      userMessage = 'DING DING DING.  He loves his Dog Luke!';
      break;
    default:
      totalWrong++;
      console.log('Wrong Answer. User did not pick yes or no for Q1 with ' + totalWrong + ' wrong answers.'); 
      userMessage = 'That was a great guess but totaly WRONG! His Dog has his heart.';
      break;
  }
  alert(userMessage + ' You have answered ' + totalWrong + ' wrong answers.');
}

function askQuestion2() {
  var question2 = prompt('Does Roger prefer an Android device over an Apple device?');
  userMessage = '';
  question2 = question2.toUpperCase();
  switch(question2) {
    case 'NO':
      console.log('Correct Answer. User entered no for Q2 with ' + totalWrong + ' wrong answers');
      if (totalWrong < 1) {
        userMessage = 'Wow, nice work. He loves the iPhone.  You got both questions right so far.  Keep it up';
      } else {
        userMessage = 'Wow, nice work. He loves the iPhone.  50% so far on the Roger Quiz';
      }
      break;
    case 'YES':
      totalWrong++;
      console.log('Wrong Answer. User entered yes for Q2 with ' + totalWrong + ' wrong answers.');
      userMessage = 'Nope, iPhone for Roger.';
      break;
    default:
      totalWrong++;
      console.log('Wrong Answer. User did not pick yes or no for Q2 with ' + totalWrong + ' wrong answers.');
      userMessage = 'Nope, iPhone for Roger!';
      break; 
  }
  alert(userMessage + ' You have answered ' + totalWrong + ' wrong answers.');
}

function askQuestion3() {
  var question3 = prompt('Can Roger\'s Famous CheeseBurger beat out Bobby Flay in a throwdown?');
  userMessage = '';
  question3 = question3.toUpperCase();
  switch(question3) {
    case 'NO':
      console.log('Correct Answer. User entered no for Q3 with ' + totalWrong + ' wrong answers.');
      userMessage = 'Correct! He does make a mean Burger, but Bobby Flay is well, the BEST!';
      if (totalWrong < 1) {
        userMessage = userMessage + ' 3 out of 3 so far.  Keep it up.';
      } else {
        userMessage = userMessage + ' Keep it up'
      }
      break;
    case 'YES':
      totalWrong++;
      console.log('Wrong Answer. User entered yes for Q3 with ' + totalWrong + ' wrong answers.');
      userMessage = 'Sorry! Roger appreciates the confidence, BUT we are talking about Bobby Flay.';
      break;
    default:
      totalWrong++;
      console.log('Wrong Answer. User did not pick yes or no for Q3 with ' + totalWrong + ' wrong answers.');
      userMessage = 'Someone needs to revisit Roger101!';
      break;
  }
  alert(userMessage + ' You have answered ' + totalWrong + ' wrong answers.');
}

function askQuestion4() {
  var question4 = prompt('Did Roger server in 2 brances of the Military?');
  userMessage = '';
  question4 = question4.toUpperCase();
  switch(question4) {
  case 'NO':
    totalWrong++;
    console.log('Wrong Answer. User entered no for Q4 with ' + totalWrong + ' wrong answers.');
    userMessage = 'Ouch! Roger has serverd in the US Army and in the US Navy.';
  break;
  case 'YES':
    console.log('Correct Answer. User entered yes for Q4 with ' + totalWrong + ' wrong answers.');
    userMessage = 'Outstanding.  Roger did server in 2 Branches.  Army and Navy.'
    break;
  default:
    totalWrong++;
    console.log('Wrong Answer. User did not pick yes or no for Q4 with ' + totalWrong + ' wrong answers.'); 
    userMessage = 'Roger has serverd in the US Army and in the US Navy.';
  break;
  }
  alert(userMessage + ' You have answered ' + totalWrong + ' wrong answers.');
}

function askQuestion5() {
  var question5 = prompt('Did Roger win a National Championship in an online game?');
  userMessage = '';
  question5 = question5.toUpperCase();
  switch(question5) {
    case 'NO':
    totalWrong++;
    console.log('Wrong Answer. User entered no for Q5 with ' + totalWrong + ' wrong answers.');
    userMessage = 'Wrong Answer.  Roger has won a few National Championships in Trade Wars 2002.';
  break;
  case 'YES':
    console.log('Correct Answer. User entered yes for Q5 with ' + totalWrong + ' wrong answers.');
    userMessage = 'Outstanding.  Roger has won a few National Championships in Trade Wars 2002.';
  break;
  default:
    totalWrong++;
    console.log('Wrong Answer. User did not pick yes or no for Q4 with ' + totalWrong + ' wrong answers.'); 
    userMessage = 'Roger has won a few National Championships in Trade Wars 2002.';
  break;
  }
  alert(userMessage + ' You have answered ' + totalWrong + ' wrong answers.');
}

function askQuestion6() {
  userMessage = '';
  var question6Answer = 10;
  var guess = 0
  var question6 = '';
  do {
    question6 = prompt('From 1-20, how many National Championships has Roger won in Trade Wars 2002? You have 4 chances to guess!');
    parseInt(question6);
    if (question6 < question6Answer) {
      guess++;
      console.log('Wrong Answer. User guessed ' + question6 + ' has used ' + guess + ' guesses and has ' + totalWrong + ' wrong answers.');
      userMessage = 'Nope.  You guessed a little low.  You have ' + (4 - guess) + ' guesses left';
          if (guess > 3) {
        totalWrong++;
      }
    } else if(question6 > question6Answer) {
      guess++; 
      console.log('Wrong Answer. User guessed ' + question6 + ' has used ' + guess + ' guesses and has ' + totalWrong + ' wrong answers.');
      userMessage = 'Nope.  You guessed a little high.  You have ' + (4 - guess) + ' guesses left';
      if (guess > 3) {
        totalWrong++;
      } 
    } else if(question6 = question6Answer) {
      console.log('Correct Answer. User guessed ' + question6 + ' and used ' + guess + ' guesses and has ' + totalWrong + ' wrong answers.');
      userMessage = 'You got it. You used up ' + guess + ' guesses.';
    }
    alert(userMessage);
  } while ((question6 != question6Answer) && (guess < 4));
}

function askQuestion7() {
  userMessage = '';
  var guess = 0
  var question7 = '';
  do {
    question7 = prompt('You get 6 changes.  Guess one of the Submarines that Roger server on. (HINT:  They are named after US States!');
    question7 = question7.toUpperCase();
    if ((question7 != 'GEORGIA') && (question7 != 'ALASKA')) {
      guess++;
      console.log('Wrong Answer.  User guessed ' + question7 + ' and used ' + guess + ' guesses and has ' + totalWrong + ' wrong answers.');
      userMessage = 'Nope.  Try Again!  You have ' + (6 - guess) + ' guesses left';
          if (guess > 5) {
        totalWrong++;
      }
    } else if((question7 = 'GEORGIA') || (question7 = 'ALASKA')) {
      console.log('Correct Answer. User guessed ' + question7 + ' and used ' + guess + ' guesses and has ' + totalWrong + 'wrong answers.');
      guess++; 
      userMessage = 'Holy cow.  Great Guess.';
    }
    alert(userMessage);
  } while ((question7 != 'GEORGIA') && (question7 != 'ALASKA') && (guess < 6));
  alert('You got ' + (totalWrong / 7 * 100) + '% on the Roger Quiz.');
}