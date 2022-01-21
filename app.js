import { UI } from './models/UI.js'
import { QuizLogic } from './models/QuizLogic.js'
import { quizQuestions } from './data/generateQuestions.js'

const renderAgain=(quiz,ui)=>{
  ui.nextQuestion(()=>{
    quiz.next()
    renderPage(quiz,ui)
    if(quiz.index<quizQuestions.length){
      quiz.isTrue=null
      ui.hideNext(quiz.isTrue)
    }
  })
}

const renderPage = (quiz, ui) => {

  if (quiz.isEnded()) {
    ui.showEnd(quiz.score,quizQuestions.length)
  }
  else {
    ui.showQuestion(quiz.getCurrentQuestion().question)
    ui.showChoices(quiz.getCurrentQuestion().choices, (text,one) => {
      quiz.guess(text)
      if(one>0 && one<2){
        ui.hideNext(quiz.isTrue)
      }
    })
    ui.showProgress(quiz.index + 1, quizQuestions.length)
    ui.hideNext(quiz.isTrue)
  }

}

function main () {
  const ui = new UI()
  const quiz = new QuizLogic(quizQuestions)

  renderPage(quiz, ui)
  renderAgain(quiz, ui)
}

main()
