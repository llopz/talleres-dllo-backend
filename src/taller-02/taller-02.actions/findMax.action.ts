import { Taller02Type } from "../taller-02.model"

async function findMaxAction(list: number[]): Promise<Taller02Type> {
  if (list.length === 0) return { resultado: null }
  let max = list[0]
  for (const element of list) if (element > max) max = element
  return { resultado: max }
}

export default findMaxAction
