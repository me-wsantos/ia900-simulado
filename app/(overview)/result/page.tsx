'use client'

import { useState } from "react"
import Link from "next/link"
import useAppContext from "@/app/context/appContext"

export default function Home() {
  const { totalQuestions, correctAnswers, finalResult } = useAppContext()
  const [approved ] = useState(finalResult() < 70)

  return(
    <div className="items-center justify-items-center min-h-screen p-4 py-10 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

          <div className="w-full flex justify-center items-center flex-col">
            <h1 className="text-lg">Resultado final</h1>
            
            <div
              className={`mt-8 text-xl text-white py-3 px-12 rounded-full ${ approved ? 'bg-red-400' : 'bg-green-400' }`}>
              { `${approved ? "REPROVADO" : "APROVADO" }` }
            </div>

            <div className="mt-4">{ finalResult() + "% de acertos" }</div>
            <div className="mt-4">{ `Respostas corretas: ${correctAnswers } de ${totalQuestions}` }</div>
            <div className="mt-4">{ "Tempo de prova: 28 minutos" }</div>
          </div>

          <Link
          href="/"
          className="bg-blue-700 w-36 py-2 ml-4 rounded-lg text-lg text-center font-bold disabled:bg-gray-500"
        >
          Página inicial
        </Link>
      </main>
    </div>  
  )
}