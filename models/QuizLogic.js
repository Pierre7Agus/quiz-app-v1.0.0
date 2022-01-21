export class QuizLogic{

  index =0
  score =0
  //recibe como parametro un array el cual contiene instancias de Questions.js
  constructor(quizQuestions){
    this.quizQuestions=quizQuestions;
  }

  getCurrentQuestion(){
    return this.quizQuestions[this.index];
  }

  guess(answer){
    if(this.getCurrentQuestion().correctAnswer(answer)){
      this.score++;
    }
    this.index++;
  }

  isEnded(){
    return this.quizQuestions.length===this.index
  }

}
