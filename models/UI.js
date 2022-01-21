export class UI {
  showQuestion (textQuestion) {
    const question = document.getElementById('question')
    question.innerText = textQuestion
  }

  showChoices (choices, callback) {
  // choices es un array

  const buttons = document.querySelectorAll('.options')

  choices.forEach((choice, index) => {
    buttons[index].innerText = choice
  })

    //este codigo permite generar botones, de esta manera se puede dar la posibilidad al usuario de que elija cuantas opciones de respuesta deba tener el quiz
    const options = document.querySelector('.choices');
    options.innerHTML='';
    choices.forEach((choice)=>{
        const button = document.createElement('button');
        button.innerText= choice;
        button.addEventListener('click',(event)=>{
            callback(event.target.innerText);
        });
        button.classList.add('options');
        options.append(button);
    });

  }

  showProgress (index, total) {
    const footer = document.getElementById('foot')
    footer.innerText = `Pregunta ${index} de ${total}`
  }

  nextQuestion(callback){
    const next=document.querySelector('.next')
    next.addEventListener('click',()=>{
      callback()
    })
  }

  showEnd(score,total){
    const head=document.querySelector('.quiz_header')
    const sec=document.querySelector('.quiz_section')
    const foot=document.querySelector('.quiz_footer')
    const quiz=document.querySelector('.quiz')
    const templateEnd=document.getElementById('templateTest_end').content
    const fragment=document.createDocumentFragment()

    templateEnd.querySelector('h3').textContent=`Contestaste correctamente ${score} de ${total}`
    templateEnd.querySelector('.qualification').textContent=`Tu calificacion es de ${score*10} sobre ${total*10}`
    templateEnd.querySelector('.message').textContent=`Felicidades has terminado el quiz`

    const clone=templateEnd.cloneNode(true)
    fragment.appendChild(clone)
    quiz.removeChild(head)
    quiz.removeChild(sec)
    quiz.removeChild(foot)
    quiz.appendChild(fragment)
  }
}
