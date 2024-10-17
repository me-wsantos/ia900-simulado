'use client'

import { useState, createContext, useContext } from 'react'

interface IAppContext {
  answered: boolean
  setAnswered(value: boolean): void
  selectedAnswer: number
  setSelectedAnswer(value: number): void
  isCorrect: boolean
  setIsCorrect(value: boolean): void,
  totalQuestions: number,
  setTotalQuestions(value: number): void
  currentQuestion: number
  setCurrentQuestion(value: number): void
  correctAnswers: number
  setCorrectAnswers(value: number): void
  finalResult(): number
  testTime: number
  countTimeTest(): void
}

const AppContext = createContext({} as IAppContext)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AppContextProvider = ({ children }: any) => {
  const [answered, setAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(0)
  const [isCorrect, setIsCorrect] = useState(false)
  const [totalQuestions, setTotalQuestions] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [testTime, setTestTime] = useState(0)

  const finalResult = () => {
    const result = (correctAnswers / totalQuestions * 100).toFixed(0)
    return Number(result)
  }

  const countTimeTest = async() => {
    await new Promise(resolve => setTimeout(() => setTestTime(testTime + 1), 1000));
  }

  return(
    <AppContext.Provider value={{ 
      answered, setAnswered, 
      selectedAnswer, setSelectedAnswer,
      isCorrect, setIsCorrect,
      totalQuestions, setTotalQuestions,
      currentQuestion, setCurrentQuestion,
      correctAnswers, setCorrectAnswers,
      testTime, countTimeTest,
      finalResult
    }} >
      { children }
    </AppContext.Provider>
  )
}

const useAppContext = () => useContext(AppContext)
export default useAppContext