var readLineSync = require("readline-sync");
 //score data
var score = 0;
//new change
var asGiven = readLineSync.question("Houston #request, we have a astronaut onboarding....name appears to be...\n > ");
//highest scores
var highScores = [{
  name : "Chinmay",
  score : 6,
},{
  name : "Manali",
  score : 1,
}];
// Questioning
var setQuestions = [{
  question : "1. " + asGiven + ", which planet has the largest Asteroid belt?\n a) Saturn \n b) Venus \n c) Jupiter \n ",
  answer : "Saturn",
  success : "..Astronaut Mission Patches and Spacecraft Callsigns... \n 055:55:19... \n ..Swigert: Okay, Houston ..."
},{
  question : "2. " + asGiven + " Which mission of NASA brought the first human to the moon?\n a) Apollo program \n b) Gemini program \n c) Mercury program \n ",
  answer : "Apollo program",
  success : "...downlink — radio signal sent to Earth from a spacecraft...\n 055:55:19... \n Lovell: ... Houston..."
},{
  question : "3. " + asGiven + ", Do you know which is the smallest planet in the solar system?\n a) Saturn \n b) Mercury \n c) Venus \n ",
  answer : "Mercury",
  success : "055:55:20... \n ..Swigert: ... we've had a problem here. [Pause.]"
},{
  question : "4. " + asGiven + " Recently, there was a discovery of which planet?\n a) Planet Y \n b) Planet X \n c) Mars \n ",
  answer : "Planet X",
  success : "LOX..055:55:28... \n Lousma: This is Houston?. Say again, please."
},{
  question : "5." + asGiven + ", what was the first manned mission of NASA?\n a) PQS-5 \n b) Apollo-Soyuz \n c) STS-1 \n ",
  answer : "STS-1",
  success : "055:55:45... \n CC 13 \n ...Houston!!. You are GO for staging."
},{
   question : "6. Which planet is farthest from Neptune? " + asGiven + " you know this? \n a) Uranus \n b) Mercury \n c) Venus \n ",
  answer : "Mercury",
  success : "The NASA controller, `T-minus 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, ignition, and liftoff!"
}]
//taking input
function userInput() {
  // var asUserGiven = readLineSync.question(asGiven);
  console.log("Welcome Aboard " + asGiven + " -#Flight: Mercury-Atlas 7 >> -#Call sign: Aurora 7");
  readLineSync.question("Press [ENTER] to start");
  console.log(asGiven + " attention here - [ANSWERS are CASE-SENSITIVE, type as shown in OPTIONS]");
}
//functioning
function actual (question, answer, success){
  question=question+"\n > ";
  var userAnswer = readLineSync.question(question);
  if (userAnswer===answer){
    console.log("Genius! " + asGiven);
    score = score + 1;
  } else {
    console.log("ahh! houston, we have a problem. " + asGiven + " Abort");
    console.log("Ans is: " + answer)
  }
  console.log("your score is: " + score);
  console.log("..................apollo 13, We've had a Main B Bus Undervolt");
  console.log(success);
}
//presentation of questions now
function present(){
  for (var i=0; i<setQuestions.length; i++){
    var getQuestions = setQuestions[i];
    console.log("\n");
    actual(getQuestions.question, getQuestions.answer, getQuestions.success);
  }
}
//highscores
function showScores(){
  console.log("YAY! You SCORED: ", score);
  console.log("Check out the high scores, if you should be there ping me and I'll update it");
  highScores.map(score => console.log(score.name, " : ", score.score))
}

userInput();
present();
showScores();

//...development in progress.....