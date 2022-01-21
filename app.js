import { UI } from './models/UI.js'
import { QuizLogic } from './models/QuizLogic.js'
import { quizQuestions } from './data/generateQuestions.js'

const renderAgain=(quiz,ui)=>{
  ui.nextQuestion(()=>{
    quiz.next()
    renderPage(quiz,ui)
  })
}

const renderPage = (quiz, ui) => {

  if (quiz.isEnded()) {
    ui.showEnd(quiz.score,quizQuestions.length)
  }
  else {
    ui.showQuestion(quiz.getCurrentQuestion().question)
    ui.showChoices(quiz.getCurrentQuestion().choices, (text) => {
      quiz.guess(text)
    })
    ui.showProgress(quiz.index + 1, quizQuestions.length)
  }

}

function main () {
  const ui = new UI()
  const quiz = new QuizLogic(quizQuestions)

  renderPage(quiz, ui)
  renderAgain(quiz, ui)
}

main()
