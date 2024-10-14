'use client'
import Link from "next/link";
import useAppContext from "./context/appContext";

export default function Home() {
  const { testTime, countTimeTest } = useAppContext()

  return (
    <div className="h-screen items-center justify-items-center min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="h-full flex flex-col justify-center items-center sm:items-start">
        <Link
          href="/start"
          className="bg-blue-700 w-3/4 py-3 ml-4 rounded-lg text-lg text-center font-bold disabled:bg-gray-500"
        >
          Iniciar
        </Link>
      </main>
    </div>
  );
}
