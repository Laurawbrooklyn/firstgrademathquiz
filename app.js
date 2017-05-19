

var allQuestions = [
{
    question: "28 + 4 = ____",
    answers: [" 34", " 24", " 32", " 29" ],
    correctAnswer: 2
},
{
    question: "17 + 2 = ____",
    answers: [" 19", " 21", " 91", " 15"],
    correctAnswer: 0
},
{
    question: "15 + 5 = ____",
    answers: [" 10", " 20", " 5", " 25"],
    correctAnswer: 1
},
{
	question: "17 ___ 26",
	answers: [" <", " >", " =", " none"],
	correctAnswer: 0
},
{
	question: "18 ___ 23",
	answers: [" >", " <", " =", " none"],
	correctAnswer: 1
},
{	
	question: "27 - 3 = ____",
	answers: [" 22", " 35", " 30", " 24"],
	correctAnswer: 3
},
{
	question: "33 - 5 = ____",
	answers: [" 13", " 28", " 12", " 26"],
	correctAnswer: 1
},
{
	question: "20 - 14 = ____",
    answers: [" 4", " 34", " 16", " 6"],
    correctAnswer: 3
},
{
	question: "14 + 3 = ____",
    answers: [" 17", " 11", " 16", " 27"],
    correctAnswer: 0
},
{
	question: "21 ___ 12",
	answers: [" <", " >", " =", " none"],
	correctAnswer: 1
},
];

var $submit = $(".js-submit");
var $restart = $(".js-restart");
var $start = $(".js-start");
var $answer = $(".js-answer");
var $score = $(".js-score");
var state = {
	currentQuestion: 0,
	score: 0
};

$submit.hide();
$restart.hide();

$start.click(function() {
	showQuestion();
	$submit.show();
	$start.hide();
});

function showQuestion() {
	var question = allQuestions[state.currentQuestion];
	$(".js-question").html('<p>' + question.question + '</p>');
	$answer.html(" ");
	if (state.currentQuestion === (allQuestions.length - 1)) {
		$submit.show();
		}
	for(var i = 0; i < question.answers.length; i++) {
			$answer.append(li(question, i));	
	}
	$(".js-question-currentQuestion").html("Question " + (state.currentQuestion + 1) + " out of " + allQuestions.length + " .");
}

function li(question, i) {
	return'<li><label><input type="radio" data-correct="'+ (question.correctAnswer === i) +'" name="q1">' + question.answers[i] + '</label></li>'
}

$submit.click(function checkAnswer() {
	var isCorrect = $("input:checked").attr("data-correct");
	
	if (isCorrect === "true") {
		$score.html("You are correct! You're score is " + (++state.score) + ".");
	} else { 
		$score.html("Sorry, you're incorrect! You're score is " + state.score + ".");
	}	
	state.currentQuestion++;
	if (state.currentQuestion === allQuestions.length) {
		$submit.hide();
		$restart.show();
	} else {
	showQuestion();	
	}
}); 

$restart.click(function() {
	$restart.hide();
	$submit.show();
	state.currentQuestion = 0;
	state.score = 0;
	showQuestion();
	$score.empty();
})


