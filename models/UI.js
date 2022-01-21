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

  const parentElement=document.querySelector('.choices')
  parentElement.addEventListener('click',(e)=>{
    if(e.target.className === 'options'){
        callback(event.target.innerText)
    }
  })

    /*
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
*/
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
}
