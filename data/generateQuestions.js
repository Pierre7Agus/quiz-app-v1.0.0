import {questions} from './questions.js'
import {Questions} from '../models/Questions.js'

export const quizQuestions=questions.map((item)=>{
	return new Questions(item.question,item.choices
		,item.answer)
})