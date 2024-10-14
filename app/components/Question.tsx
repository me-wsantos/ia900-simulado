'use client'

import Link from "next/link"
import Radio from "./Radio"
import { IQuestion } from "../intefaces"
import useAppContext from "../context/appContext"

export default function Question({ id, description, answers, explanation, reference }: IQuestion) {
  const { answered, isCorrect, selectedAnswer } = useAppContext()

  return (
    <div className="w-full">
      <div className="p-0 flex justify-start items-start mb-8 xl:max-w-6xl">
        <div className="pr-2 text-green-400 text-lg flex"><strong>{id}</strong></div>
        <div className="p-0 text-lg"
          dangerouslySetInnerHTML={{ __html: description }}
        >

        </div>
      </div>

      <div className="mb-12">
        {
          answers.map((data) => (
            <div key={data.number}
              className={`p-0 my-8 flex border rounded-xl
              ${answered && selectedAnswer == data.number && !data.correct ? 'bg-red-500 border-red-500 text-white' : ''}
              ${answered && selectedAnswer == data.number && data.correct ? 'bg-green-500 border-green-500 text-white' : ''}
              ${answered && selectedAnswer != data.number && data.correct ? 'bg-green-500 border-green-500 text-white' : ''}
              ${answered && selectedAnswer != data.number && !data.correct ? 'border-red-500 text-white' : ''}
              
              `}

            >
              <Radio id={String(data.number)} description={data.description} correct={data.correct} />
            </div>
          ))
        }
      </div>

      {answered &&
        <div className="py-5 px-2 opacity-50 text-gray-200">
          <h2 className="text-lg font-bold mb-4">Explicação</h2>
          <p className="mb-4 text-lg italic"
            dangerouslySetInnerHTML={{ __html: explanation }}
          ></p>

          { reference.length > 0 && (
            <Link
              href={reference}
              target="_blank"
              className="text-blue-400"
            >
              Link de referência
            </Link>
          )}
        </div>
      }
    </div>
  )
}