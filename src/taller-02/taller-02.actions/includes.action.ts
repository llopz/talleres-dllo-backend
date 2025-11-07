import { Taller02Type } from "../taller-02.model"

async function includesAction(list: number[], num: number): Promise<Taller02Type> {
  if (list.length === 0) return { resultado: false }
  for (const element of list) if (element === num) return { resultado: true }
  return { resultado: false }
}

export default includesAction
