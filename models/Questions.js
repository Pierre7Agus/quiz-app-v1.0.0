class Questions{

	constructor(question,choices,answer){
		this.question=question;
		this.choices=choices;
		this.answer=answer;
	}

	correctAnswer(answer){
		return this.answer === answer;
	}
}
