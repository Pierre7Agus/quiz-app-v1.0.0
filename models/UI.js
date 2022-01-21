export class UI {
  showQuestion (textQuestion) {
    const question = document.getElementById('question')
    question.innerText = textQuestion
  }

  showChoices (choices, callback) {
  // choices es un array

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

    const buttons = document.querySelectorAll('.options')

    choices.forEach((choice, index) => {
      buttons[index].innerText = choice
    })
  }

  showProgress (index, total) {
    const footer = document.getElementById('foot')
    footer.innerText = `Pregunta ${index} de ${total}`
  }

}
