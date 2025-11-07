import { Taller02Type } from "../taller-02.model"
import findMaxAction from "./findMax.action"
import findMinAction from "./findMin.action"
import includesAction from "./includes.action"

async function missingNumbersAction(list: number[]): Promise<Taller02Type> {
  if (list.length === 0) return { resultado: [] }

  const { resultado: max } = await findMaxAction(list)
  const { resultado: min } = await findMinAction(list)

  const missing: number[] = []
  if (typeof max !== "number" || typeof min !== "number") return { resultado: [] }

  for (let num = min; num <= max; num++) {
    const { resultado: exists } = await includesAction(list, num)
    if (!exists) missing.push(num)
  }

  return { resultado: missing }
}

export default missingNumbersAction
