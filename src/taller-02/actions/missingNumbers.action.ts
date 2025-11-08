import findMaxAction from "./findMax.action"
import findMinAction from "./findMin.action"
import includesAction from "./includes.action"

async function missingNumbersAction(list: number[]) {
  if (list.length === 0) return []

  const max = await findMaxAction(list)
  const min = await findMinAction(list)

  const missing: number[] = []
  if (typeof max !== "number" || typeof min !== "number") return []

  for (let num = min; num <= max; num++) {
    const exists = await includesAction(list, num)
    if (!exists) missing.push(num)
  }

  return missing
}

export default missingNumbersAction
