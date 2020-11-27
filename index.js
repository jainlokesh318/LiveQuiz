var readLinesync = require("readline-sync");
var username = readLinesync.question("What is your name? ");

console.log("Hey " + username + "! Let's see if you know me or not\n");

var questionOne = {
  question: "In which country do I live?\n",
  answer: "India"
}

var questionTwo = {
  question: "In which state do I live?\n",
  answer: "Rajasthan"
}

var questionThree = {
  question: "Do I want to be a software engineer?\n",
  answer: "yes"
}

var questions = [questionOne, questionTwo, questionThree];

var score = 0;
function play(question, answer)
{
  var userAnswer = readLinesync.question(question);
  if(userAnswer.toLowerCase() == answer.toLowerCase())
  {
    score = score + 1;
    console.log("Yay! Its Correct\nYour updated score is :- " + score + "\n");
  }
  else
  {
    console.log("Opps! You can still know me better\n");
  }
}

for(var i = 0; i < questions.length; i++)
{
  play(questions[i].question, questions[i].answer);
}

console.log("\nYour final score is :- " + score);