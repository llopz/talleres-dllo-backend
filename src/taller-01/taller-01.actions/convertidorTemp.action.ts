import { Taller01Type } from "../taller-01.model"

async function convertidorTempAction(tempc: number): Promise<Taller01Type> {
  const tempf = tempc * (9 / 5) + 32
  return { resultado: tempf }
}

export default convertidorTempAction
