function Quiz (questions) {
	this.score = 0; 
	this.questions = questions;
	this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
	return this.questions[this.questionIndex]
}

Quiz.prototype.isEnded = function() {
	return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer) {

	if (this.getQuestionIndex().correctAnswer(answer)) {
		this.score++;
	}

	this.questionIndex++;
}
function Question (text, choices, answer) {
	this.text = text;
	this.choices = choices;
	this.answer = answer;
}

Question.prototype.correctAnswer = function(choice) {
	return choice === this.answer;
}


function guess(id, guess) {
	var button = document.getElementById(id);
	button.onclick = function() {
		quiz.guess(guess);
		populate();
	}
}


function showProgress() {
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById('progress');
	element.innerHTML = currentQuestionNumber + " of " + quiz.questions.length;
}
function thisquestion(){
    var current = quiz.questionIndex + 1;
    element.innerHTML = current;
}


function showScores() {
	var gameOverHTML = "<h1>Result</h1>";
	gameOverHTML += "<h2 id='score'> Your Scores: " + quiz.score + "</h2>";
	var element = document.getElementById('quiz');
	element.innerHTML = gameOverHTML;
}
function populate() {
	if (quiz.isEnded()) {
		showScores();
	} else {
        //thisquestion();
		var element = document.getElementById('question');
		element.innerHTML = quiz.getQuestionIndex().text;

		//show choices
		var choices = quiz.getQuestionIndex().choices;
		for (var i = 0; i < choices.length; i++) {
			var element = document.getElementById('choice' + i);
			element.innerHTML = choices[i];

			guess("btn" + i, choices[i]);
		}

		showProgress();
	}
}


var questions = [
	new Question("Which House did Harry Potter belong to?", ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"], "Gryffindor"),
	new Question("Who was the secret keeper of James Potter's house?", ["Sirius Black", "Remus Lupin", "Peter Pettigrew", "Prof. McGonagall"], "Peter Pettigrew"),
	new Question("What was the patronus of Hermione Granger?", ["beaver", "otter", "ferret", "deer"], "otter"),
	new Question("Parvati and Padma Patil were in which houses respectively?", ["Gryffindor, Ravenclaw", "Gryffindor, Gryffindor", "Ravenclaw, Hufflepuff", "Gryffindor, Hufflepuff"], "Gryffindor, Ravenclaw"),
 	new Question("Who won the Quidditch Cup in 1st Year?", ["Slytherin", "Ravenclaw", "Hufflepuff", "Gryffindor"], "Gryffindor"),
    new Question("What was the name of Blacks' House house elf?", ["Kreacher", "Dobby", "Minnie", "Winky"], "Kreacher"),
];

var quiz = new Quiz (questions);

populate();
