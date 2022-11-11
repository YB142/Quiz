var start = document.getElementById('start');
var quizEL = document.getElementById('quiz');
var titleEL = document.getElementById('title');
var optionEL = document.getElementById('option');
var currentQuestion = 0;
var timeEl = document.getElementById('timer');
var secondsLeft = 20;
var answers = ['4','2','9'];
var fullDiv = document.getElementById('fullDiv');
var timeOutScreen = document.getElementById('timeOut');
var finish = document.getElementById('endQuiz');
var score = 0;
var aside = document.getElementById('score');
var finishText = document.getElementById('finishText')


start.addEventListener('click', startQuiz);


function startQuiz(){
    start.style.display = 'none';
    quizEL.style.display = 'block';
    showQuestion();
    timer();
}


function showQuestion(){
    var questionText = questions[currentQuestion];
    titleEL.textContent = questionText.title;

    optionEL.textContent = '';

    for (var i=0; i<questionText.choices.length; i++) {
        var option = questionText.choices[i];
        var optionBtn = document.createElement('button');
        optionBtn.textContent = option;
        optionBtn.addEventListener('click', nextQuestion);
        optionEL.appendChild(optionBtn)
        aside.textContent = score
    }
}

function timer() {
    var actualTimer = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + ' seconds left for this question';

            if(secondsLeft <= 0) {
                clearInterval(actualTimer);
                timeOut();
            }
    }, 1000)
}

function nextQuestion(event) {
    var btnEl = event.target;
    if (btnEl.textContent !== questions[currentQuestion].answer){
        secondsLeft -= 5;
        alert('wrong')
        score--;
    }else{
        alert('correct')
        currentQuestion++;
        answers++;
        score++
    }
    
    
    if (currentQuestion === questions.length){
        endQuiz()
    }else {
        showQuestion();
    }
}


function timeOut() {
    fullDiv.style.display = 'none';
    timeOutScreen.style.display = 'block';
}   

function endQuiz() {
    var initial = prompt('What are youre initials?', 'insert initials here')
    fullDiv.style.display = 'none';
    finish.style.display = 'block';
    finishText.textContent = 'Quiz finished, your score is ' + score + ' ' + initial + '.';
}

