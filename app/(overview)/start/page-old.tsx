'use client'
import { useEffect, useState } from "react";
import { redirect } from "next/navigation"
import useAppContext from "../../context/appContext";
import Question from "../../components/Question";
import { questions_ia_900 } from "../../data/questions/ia-900";

export default function HomeOLD() {
  const { 
    answered, setAnswered,
    totalQuestions, setTotalQuestions,
    currentQuestion, setCurrentQuestion,
    setSelectedAnswer, correctAnswers,
    finalResult
  } = useAppContext()


  useEffect(() => {
    setCurrentQuestion(0)
    setTotalQuestions(questions_ia_900.length)
  },[])

  useEffect(() => {
    setAnswered(false)
    setSelectedAnswer(0)

    if((currentQuestion + 1) == totalQuestions) {
      redirect("/result")
    }
  },[currentQuestion])

  return (
    <div className="items-center justify-items-center min-h-screen p-4 py-10 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="w-full flex justify-between text-lg pb-3 border-b-[1px] border-b-gray-400">
          <div className={`${finalResult() > 70 ? 'bg-green-400' : 'bg-red-400' } px-4 py-1 text-black rounded-full`}>
            Resultado: {finalResult() + "%" }
          </div>
          <div className="bg-green-400 px-4 py-1 text-black rounded-full">{ currentQuestion + 1 + " / " + totalQuestions }</div>
        </div>

        <div>
          <Question 
            id = { questions_ia_900[currentQuestion].id }
            description={ questions_ia_900[currentQuestion].description }
            answers={ questions_ia_900[currentQuestion].answers }
            explanation={ questions_ia_900[currentQuestion].expanation }
            reference={ questions_ia_900[currentQuestion].reference }
          />
        </div>

        <div className="w-full flex">
          <button className="bg-red-700 w-1/4 py-3 rounded-lg text-lg">
            Parar
          </button>

          <input 
            type="button"
            className="bg-blue-700 w-3/4 py-3 ml-4 rounded-lg text-lg disabled:bg-gray-500"
            disabled={!answered}
            value={ (currentQuestion + 1) == totalQuestions ? "Finalizar" : "Próximo" }
            onClick={() => setCurrentQuestion(currentQuestion + 1)}
          />
        </div>
      </main>
    </div>
  );
}
