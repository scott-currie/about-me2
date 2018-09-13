'use strict';

var catDog = prompt('Is Roger a Cat or a Dog person?');
var userMessage = '';
var totalQuestionsWrong = 0
catDog = catDog.toUpperCase();
switch(catDog) {
  case 'CAT':
    console.log('User has entered cat');
    userMessage = 'Nice Try! He does like Cats, but they are not his favorite!';
    totalQuestionsWrong = totalQuestionsWrong + 1;
    break;
  case 'DOG':
    console.log('User has entered dog');
    userMessage = 'DING DING DING.  He loves his Dog Luke!';
    break;
  case 'BOTH':
    console.log('User selected both');
    userMessage = 'That was a great guess but totaly WRONG! His Dog has his heart.';
    totalQuestionsWrong = totalQuestionsWrong + 1;
  default:
    console.log('user did not pick cat, dog, or both'); 
    userMessage = 'Hmm, maybe you mis-typed your answer.  He loves his Dog Luke! Better luck next time..';
    totalQuestionsWrong = totalQuestionsWrong + 1;
    break;
}
alert(userMessage + ' You have answered ' + totalQuestionsWrong + ' questions wrong');



