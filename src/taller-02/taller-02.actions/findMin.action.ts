import { Taller02Type } from "../taller-02.model"

async function findMinAction(list: number[]): Promise<Taller02Type> {
  if (list.length === 0) return { resultado: null }
  let min = list[0]
  for (const element of list) if (element < min) min = element
  return { resultado: min }
}

export default findMinAction
