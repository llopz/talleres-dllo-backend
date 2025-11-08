import findMaxAction from "./actions/findMax.action"
import findMinAction from "./actions/findMin.action"
import includesAction from "./actions/includes.action"
import sumAction from "./actions/sum.action"
import missingNumbersAction from "./actions/missingNumbers.action"
type Taller02Type = number | number[] | boolean | null

async function findMax(list: number[]): Promise<Taller02Type> {
  return await findMaxAction(list)
}

async function findMin(list: number[]): Promise<Taller02Type> {
  return await findMinAction(list)
}

async function includes(list: number[], num: number): Promise<Taller02Type> {
  return await includesAction(list, num)
}

async function sum(list: number[]): Promise<Taller02Type> {
  return await sumAction(list)
}

async function missingNumbers(list: number[]): Promise<Taller02Type> {
  return await missingNumbersAction(list)
}

export { findMax, findMin, includes, sum, missingNumbers }
