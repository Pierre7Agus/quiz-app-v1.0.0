export class QuizLogic{
  isTrue=null
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
    this.isTrue=this.getCurrentQuestion().correctAnswer(answer)
  }

  next(){
    this.index++
    if(this.isTrue){
      this.score++
    }
  }

  isEnded(){
    return this.quizQuestions.length===this.index
  }

  isNextActive(callback,e){
      if(e.target.className === 'options'){
        this.isTrue=this.isTrue
      }else{
        this.isTrue=null
      }
      callback(this.isTrue)
  }
  
}
