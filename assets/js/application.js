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
    "Clemson"
  );

  var question2 = new Question(
    "With two of the most dramatic wins in NCAA history, the team won the SEC Championship in 2013.",
    ["Georgia", "Alabama", "Auburn", "Texas Tech"],
    "Auburn"
  );

  var question3 = new Question(
    "Known as the world's largest cocktail party, the Georgia Bulldog's take on this team in Jacksonville.",
    ["FSU", "Florida", "Auburn", "USC"],
    "Florida"  
  );

  var question4 = new Question(
    "As one of the all time great programs, this team has more national titles than any other university.",
    ["Alabama", "Texas", "USC", "FSU"],
    "Alabama"
  );

  var question5 = new Question(
    "This team has the most ACC conference championships.",
    ["Florida State", "Georgia Tech", "Miami", "Clemson"],
    "Clemson"
  );

  /*--- Stores questions in an array ---*/
  questionBank = [question1, question2, question3, question4, question5];

  /*--- Allows user to select an answer from choices ---*/
  $('#answer-choices').on('click', '.button', function() {
    $('li > .button').removeAttr('id', 'selected-answer');
    $(this).attr('id', 'selected-answer');
  });

  /*--- User submits answer. User answer is checked against correct answer. Correct or Incorrect is displayed ---*/
  $('.right-container').on('click', '.submit', function() {
    var answer = document.getElementById('selected-answer').value;
    console.log(answer);
    if (answer == questionBank[questionNumber].answer ) {
      console.log('Correct');
      numberCorrect++;
      $("<h2>Correct!</h2>").insertBefore("#next-question");
      $("#answer-box").addClass('correct');
    } else {
      console.log("Incorrect");
      $("<h2>Incorrect!</h2>").insertBefore("#next-question");
      $("#answer-box").addClass('incorrect');
    }
    showAnswerBox();
  });

  /*--- Quiz is reset to show new question. ---*/
  $('#next-question').click(function() {
    questionNumber++;
    hideAnswerBox();
    if (questionNumber < 5) {
      setQuiz();
    } else {
      console.log('showing try again');
      tryAgain();
    }
  });

  /*--- Restart quiz on click ---*/
  $(document).on('click', '#try-again-button', function() {
    $('#quiz').show();
    $('#try-again').remove();
    questionNumber = 0;
    numberCorrect = 0;
    setQuiz();
  });

  /*--- Setup quiz questions ---*/
  function setQuestion(questionInput) {
    $("<p>" + questionInput.question + "</p>").appendTo("#question-box");
  };

  /*--- Setup answer choices ---*/
  function setAnswerChoices(answerInput) {
    for(var i = 0; i < answerInput.length; i++) {
      $("<li><input type=\"button\" class=\"button\" value=" + answerInput[i] + "></input></li>").appendTo('#answer-choices');
    }
  };

  /*--- Displays user score and gives user choice to play again ---*/
  function tryAgain() {
    updateProgressBar();
    $('#number-correct').empty();
    $('#quiz').hide();
    $('<div id="try-again"></div>').insertAfter("#quiz");
    $('<p>You scored ' + numberCorrect + ' out of 5</p>').appendTo('#try-again');
    $('<input type="button" id="try-again-button" class="button" value="Try again">').appendTo('#try-again');
  };

  /*--- Display answer box on submit ---*/
  function showAnswerBox() {
    $('#answer-box').show();
    $('#next-question').show();
  };

  /*--- Hides answer box for next question. Clears correct and Incorrect classes ---*/
  function hideAnswerBox() {
    $('#answer-box').children('h2').remove();
    $('#answer-box').removeClass('correct incorrect');
    $('#answer-box').hide();
    $('#next-question').hide();
  };

  function updateProgressBar () {
    $('#progress-bar').removeClass();
    if (numberCorrect == 1) {
      $('#progress-bar').addClass('one-correct');
    } else if (numberCorrect == 2) {
      $('#progress-bar').addClass('two-correct');
    } else if (numberCorrect == 3) {
      $('#progress-bar').addClass('three-correct');
    } else if (numberCorrect == 4) {
      $('#progress-bar').addClass('four-correct');
    } else if (numberCorrect == 5) {
      $('#progress-bar').addClass('five-correct');
    } else {
      $('#progress-bar').addClass('zero-correct');
    }
  };

  /*--- Setup Quiz ---*/
  function setQuiz() {
    var currentQuestion = questionBank[questionNumber];
    $('#question-box').empty();
    $('#answer-choices').empty();
    $('#question-status-box').empty();
    $('#number-correct').empty();
    setQuestion(currentQuestion);
    setAnswerChoices(currentQuestion.choices);
    var questionNumberDisplay = questionNumber + 1;
    updateProgressBar();
    $('#question-status-box').append('<p>Question ' + questionNumberDisplay + ' of 5</p>');
    $('#number-correct').append('<p>' + numberCorrect + ' correct of 5</p>')
  };

  setQuiz();
});