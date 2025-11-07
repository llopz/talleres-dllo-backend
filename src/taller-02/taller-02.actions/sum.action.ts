import { Taller02Type } from "../taller-02.model"

async function sumAction(list: number[]): Promise<Taller02Type> {
  if (list.length === 0) return { resultado: 0 }
  let suma = 0
  for (let element of list) {
    suma += element
  }
  return { resultado: suma }
}

export default sumAction
