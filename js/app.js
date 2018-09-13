'use strict';

var totalQuestionsWrong = 0
var question1 = prompt('Is Roger a Dog Lover?');
var userMessage = '';
question1 = question1.toUpperCase();
switch(question1) {
  case 'NO':
    totalQuestionsWrong = totalQuestionsWrong + 1;
    console.log('User has entered no for Q1 with ' + totalQuestionsWrong + ' wrong answers.');
    userMessage = 'Nice Try! Well not realy, just trying to be nice!';
    break;
  case 'YES':
    console.log('User has entered yes for Q1 with ' + totalQuestionsWrong + ' wrong answers.');
    userMessage = 'DING DING DING.  He loves his Dog Luke!';
    break;
  default:
    totalQuestionsWrong = totalQuestionsWrong + 1;
    console.log('user did not pick yes or no for Q1 with ' + totalQuestionsWrong + ' wrong answers.'); 
    userMessage = 'That was a great guess but totaly WRONG! His Dog has his heart.';
    break;
}
alert(userMessage + ' You have answered ' + totalQuestionsWrong + ' wrong answers.');

var question2 = prompt('Does Roger prefer an iPhone or Android Device?');
userMessage = '';
question2 = question2.toUpperCase();
switch(question2) {
  case 'IPHONE':
    console.log('User entered iphone for Q2 with ' + totalQuestionsWrong + ' wrong answers');
    if (totalQuestionsWrong = 0) {
      userMessage = 'Wow, nice work. He loves the iPhone.  You got both questions right so far.  Keep it up';
    } else {
      userMessage = 'Wow, nice work. He loves the iPhone.  50% so far on the Roger Quiz';
    }
    break;
  case 'ANDROID':
    totalQuestionsWrong = totalQuestionsWrong + 1;
    console.log('User entered android for Q2 with ' + totalQuestionsWrong + ' wrong answers.');
    if (totalQuestionsWrong = 1) {
      userMessage = 'Nope, iPhone for Roger. 50% so far on the Roger Quiz';
    } else {
      userMessage = 'Nope, iPhone for Roger. You have some catching up to do on the Quiz.  0% so far.';
    }
    break;
  default:
    totalQuestionsWrong = totalQuestionsWrong + 1;
    console.log('User did not enter iphone or android ' + totalQuestionsWrong + ' wrong answers.');
    userMessage = 'Nope, iPhone for Roger!';
    break; 
}
alert(userMessage + ' You have answered ' + totalQuestionsWrong + ' wrong answers.');

var question3 = prompt('Can Roger\'s Famous CheeseBurger beat out Bobby Flay in a throwdown?');
userMessage = '';
question3 = question3.toUpperCase();
switch(question3) {
  case 'NO':
    console.log('User entered no for Q3 with ' + totalQuestionsWrong + ' wrong answers.');
    userMessage = 'Correct! He does make a mean Burger, but Bobby Flay is well, the BEST!';
    if (totalQuestionsWrong = 0) {
      userMessage = userMessage + ' 3 out of 3 so far.  Keep it up.';
    } else {
      userMessage = userMessage + ' Keep it up'
    }
    break;
  case 'YES':
    totalQuestionsWrong = totalQuestionsWrong + 1;
    console.log('User entered yes for Q3 with ' + totalQuestionsWrong + ' wrong answers.');
    userMessage = 'Sorry! Roger appreciates the confidence, BUT we are talking about Bobby Flay.';
    break;
  default:
    totalQuestionsWrong = totalQuestionsWrong + 1;
    console.log('User did not enter yes or no for Q3 with ' + totalQuestionsWrong + ' wrong answers.');
    userMessage = 'Someone needs to revisit Roger101!';
    break;
}
alert(userMessage + ' You have answered ' + totalQuestionsWrong + ' wrong answers.'); //Math is not adding correctly to this point

