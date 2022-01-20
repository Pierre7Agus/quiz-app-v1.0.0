class QuizLogic{
  let index=0;
  let score=0;
  //recibe como parametro un array el cual contiene instancias de Questions.js
  constructor(quizQuestions){
    this.quizQuestions=quizQuestions;
  }

  getCurrentQuestion(){
    return this.quizQuestions[index];
  }

  

}
