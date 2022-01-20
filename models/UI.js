export class UI{
  constructor(){}

  showQuestion(textQuestion){
    let question=document.getElementById('question')
    question.innerText=textQuestion
  }

  showChoices(choices,callback){
  //choices es un array
    let buttons=document.querySelectorAll('.options')
    let parentElement=document.querySelector('.quiz_section_options')

    parentElement.addEventListener('click',(event)=>{
      if(event.target.className === "options"){
        callback(event.target.innerText)
      }
      event.stopPropagation()
    })

    choices.forEach((choice,index)=>{
      buttons[index].innerText=choice
    })
  }

}
