import {UI} from './models/UI.js'
import {QuizLogic} from './models/QuizLogic.js'
import {quizQuestions} from './data/generateQuestions.js'


function main(){
  const ui = new UI()
  const quiz=new QuizLogic(quizQuestions)

  renderPage(quiz,ui)
}

main()
