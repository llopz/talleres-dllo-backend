import findMaxAction from "./taller-02.actions/findMax.action"
import findMinAction from "./taller-02.actions/findMin.action"
import includesAction from "./taller-02.actions/includes.action"
import sumAction from "./taller-02.actions/sum.action"
import missingNumbersAction from "./taller-02.actions/missingNumbers.action"
import { Taller02Type } from "./taller-02.model"

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
