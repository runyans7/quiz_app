$(document).ready(function() {

  /*--- Global Variable ---*/
  var questionBank = [];
  var questionNumber = 0;
  var numberCorrect = 0;

  /*--- Creates Question Class ---*/
  function Question(question, choices, answer) {
    this.question = question;
    this.choices = choices;
    this.answer  = answer;
  }

  /*--- Sets questions ---*/
  var question1 = new Question(
    "Memorial Stadium, also known as Death Valley, is home to the Tigers from which university?",
    ["LSU", "Clemson", "UVA", "Mississippi"],
    1
  );

  var question2 = new Question(
    "With two of the most dramatic wins in NCAA history, the team won the SEC Championship in 2013.",
    ["Georgia", "Alabama", "Auburn", "Texas Tech"],
    2
  );

  var question3 = new Question(
    "Known as the world's largest cocktail party, the Georgia Bulldog's take on this team in Jacksonville.",
    ["Florida State", "Florida", "Auburn", "USC"],
    1  
  );

  var question4 = new Question(
    "This historic team, will begin playing an ACC heavy schedule in 2015.",
    ["Alabama", "Penn State", "Notre Dame", "Southern Cal"],
    2
  );

  var question5 = new Question(
    "This team has the most ACC conference championships.",
    ["Florida State", "Georgia Tech", "Miami", "Clemson"],
    3
  );

  /*--- Stores questions in an array ---*/
  questionBank = [question1, question2, question3, question4, question5];

  /*--- Setup sintial question ---*/
  function setQuestion(questionInput) {
    $("<p>" + questionInput.question + "</p>").appendTo("#question-box");
  }

  function setAnswerChoices(answerInput) {
    for(var i = 0; i < answerInput.length; i++) {
      $("<li><input type=\"button\" class=\"button\" value=" + answerInput[i] + "></input></li>").appendTo('#answer-choices');
    }
  }

  function setUserAnswer() {
    $('li > .button').click(function() {
      $('li > .button').removeClass('selected-answer');
      $(this).addClass('selected-answer');
    });
  }

  /*--- Run Quiz ---*/
  function runQuiz() {
    var currentQuestion = questionBank[questionNumber];
    // Set question
    setQuestion(currentQuestion);
    // Set answer choices
    setAnswerChoices(currentQuestion.choices);
    // Get answer user answer from answer choices
    setUserAnswer();
    // Check user answer vs actual answer
    // if user answer = actual answer
    // numberCorrect++
  }

  runQuiz();

  





















});