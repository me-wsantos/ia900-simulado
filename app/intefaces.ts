export interface IRadio {
  id: string
  name?: string
  description: string
  correct: boolean
}

export interface IQuestion {
  id: number,
  description: string,
  explanation: string,
  reference: string[],
  answers: {
    number: number,
    description: string,
    correct: boolean
  }[],
  image: string
}