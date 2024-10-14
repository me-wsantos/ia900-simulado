'use client'

import { IRadio } from "../intefaces"
import useAppContext from "../context/appContext"

export default function Radio({ id, description, correct }: IRadio) {
  const { answered, setAnswered, setIsCorrect, selectedAnswer, setSelectedAnswer, isCorrect, correctAnswers, setCorrectAnswers } = useAppContext()

  const checkCorrectAnswer = (correct: boolean) => {
    if (!answered && correct)  setCorrectAnswers(correctAnswers + 1)
  }

  return(
    <div 
      key={id} className="w-full p-4 py-8 flex" 
      onClick={ () => [ setAnswered(true), setIsCorrect(correct), setSelectedAnswer(Number(id)), checkCorrectAnswer(correct) ] }>
      
      <input 
        type="radio"
        name="response"
        id={ id } 
        className="min-w-5 invisible"
        checked={false}
      />
      <label htmlFor={ id } className="text-lg">
        { description }
      </label>
    </div>
  )
  
}