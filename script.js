const questions = [
    {
      question:"Most widely spoken language in the world?",
      answers: [
        {text: "French", correct: false},
        {text: "Mandarin", correct: true},
        {text: "Hindi", correct: false},
        {text: "English", correct: false},
          
      ],
    },
    {
      question: "What does chat GPT stands for",
      answers: [
        {text: "Generative Pre-trained Transformer", correct: true},
        {text: "Global Pre-trained Transformer ", correct: false},
        {text: "Generative pre-trained Tool", correct: false},
        {text: "Generative Plug-in Tool", correct: false},
      ],
    },
    {
      question: "Which of these app is not a meta app?",
      answers: [
        {text: "Instragram", correct:false},
        {text: "Whatsapp", correct: false},
        {text: "Facebook", correct: false},
        {text: "Tik-Tok", correct: true},
      ],
    },
    {
      question: "What programming language is used in Google?",
      answers: [
        {text: "C", correct: false},
        {text: "Java", correct: true},
        {text: "SQL", correct: false},
        {text: "Swift", correct: false},
      ],
    },
  ];
  
  const questionElement = document.getElementById("question");
  const answerbutton= document.getElementById("answer-buttons");
  const nexButton = document.getElementById("next-btn");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz(){
      currentQuestionIndex = 0;
      score = 0;
      nexButton.innerHTML = "Next";
      showQuestion();
  
  }
  
  function showQuestion(){
      resetState();
      let currentQuestion = questions[currentQuestionIndex];
      let questionNo = currentQuestionIndex + 1;
      questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  
      currentQuestion.answers.forEach(answer => {
         const button = document.createElement("button");
         button.innerHTML = answer.text;
         button.classList.add("btn");
         answerbutton.appendChild(button);
         if(answer.correct){
          button.dataset.correct = answer.correct;
         }
         button.addEventListener("click",selectAnswer);
    });
  }
  
  function resetState(){
     nexButton.style.display = "none";
     while(answerbutton.firstChild){
      answerbutton.removeChild(answerbutton.firstChild);
     
  }
  }
  
  function selectAnswer(e){
      const selectedBtn =  e.target;
      const isCorrect = selectedBtn.dataset.correct === "true";
      if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
      }else{
        selectedBtn.classList.add("incorrect");
      }
      Array.from(answerbutton.children).forEach(button => {
        if(button.dataset.correct === "true"){
          button.classList.add("correct");
        }
        button.disabled = true;
      });
      nexButton.style.display = "block";
      nexButton.addEventListener("click", goToNextQuestion);
    }
  
    function goToNextQuestion(){
      currentQuestionIndex++;
      if(currentQuestionIndex < questions.length){
        showQuestion();
      }else{
        alert("Quiz finished! Your score: " + score);
      }
    }
  
  
  
  
  startQuiz();