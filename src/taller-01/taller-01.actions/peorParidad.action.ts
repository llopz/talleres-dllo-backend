import { Taller01Type } from "../taller-01.model"

async function peorParidadAction(x: number): Promise<Taller01Type> {
  let paridad = true
  while (x > 0) {
    paridad = !paridad
    x -= 1
  }
  return { resultado: paridad }
}

export default peorParidadAction
