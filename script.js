var currentQuestion = 1;
var totalQuestions = 5;
var answers = {};

function startSurvey() {
  document.getElementById('welcome-screen').style.display = 'none';
  document.getElementById('survey-screen').style.display = 'block';
  showQuestion();
}

function showQuestion() {
  document.getElementById('current-question').textContent = currentQuestion;
  document.getElementById('previous-button').disabled = currentQuestion === 1;

  var questionTextElement = document.getElementById('question-text');
  var ratingContainer = document.getElementById('rating-container');
  var recommendationContainer = document.getElementById('recommendation-container');
  var textContainer = document.getElementById('text-container');

  switch (currentQuestion) {
    case 1:
      questionTextElement.textContent = 'How satisfied are you with our products?';
      ratingContainer.style.display = 'block';
      recommendationContainer.style.display = 'none';
      textContainer.style.display = 'none';
      break;
    case 2:
      questionTextElement.textContent = 'How fair are the prices compared to similar retailers?';
      ratingContainer.style.display = 'block';
      recommendationContainer.style.display = 'none';
      textContainer.style.display = 'none';
      break;
    case 3:
      questionTextElement.textContent = 'How satisfied are you with the value for money of your purchase?';
      ratingContainer.style.display = 'block';
      recommendationContainer.style.display = 'none';
      textContainer.style.display = 'none';
      break;
    case 4:
      questionTextElement.textContent = 'On a scale of 1-10, how likely are you to recommend us to your friends and family?';
      ratingContainer.style.display = 'none';
      recommendationContainer.style.display = 'block';
      textContainer.style.display = 'none';
      break;
    case 5:
      questionTextElement.textContent = 'What could we do to improve our service?';
      ratingContainer.style.display = 'none';
      recommendationContainer.style.display = 'none';
      textContainer.style.display = 'block';
      break;
  }
}

function previousQuestion() {
  currentQuestion--;
  showQuestion();
}

function nextQuestion() {
  if (currentQuestion === totalQuestions) {
    showConfirmationDialog();
  } else {
    currentQuestion++;
    showQuestion();
  }
}

function skipQuestion() {
  answers[currentQuestion] = 'Skipped';
  nextQuestion();
}

function showConfirmationDialog() {
  document.getElementById('survey-screen').style.display = 'none';
  document.getElementById('confirmation-dialog').style.display = 'block';
}

function submitSurvey() {
  // Save answers to the database or local storage using AJAX or other means
  answers[currentQuestion] = getAnswerValue();

  // Set flag as 'COMPLETED' in the database or local storage
  // You can handle this logic according to your backend implementation

  // Show thank you screen
  document.getElementById('confirmation-dialog').style.display = 'none';
  document.getElementById('thank-you-screen').style.display = 'block';

  // Reset the survey after 5 seconds
  setTimeout(resetSurvey, 5000);
}

function cancelSubmission() {
  document.getElementById('confirmation-dialog').style.display = 'none';
  document.getElementById('survey-screen').style.display = 'block';
}

function getAnswerValue() {
  var ratingInput = document.getElementById('rating-input');
  var recommendationInput = document.getElementById('recommendation-input');
  var textInput = document.getElementById('text-input');

  if (ratingInput.style.display === 'block') {
    return ratingInput.value;
  } else if (recommendationInput.style.display === 'block') {
    return recommendationInput.value;
  } else if (textInput.style.display === 'block') {
    return textInput.value;
  }
}