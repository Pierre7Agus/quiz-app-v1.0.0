import { UI } from './models/UI.js'
import { QuizLogic } from './models/QuizLogic.js'
import { quizQuestions } from './data/generateQuestions.js'

const renderPage = (quiz, ui) => {

  if (quiz.isEnded()) {
    console.log('bye')
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
}

main()
