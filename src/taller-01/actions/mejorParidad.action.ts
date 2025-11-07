import { Taller01Type } from "../taller-01.model"

async function mejorParidadAction(x: number): Promise<Taller01Type> {
  const esPar = x % 2 === 0;
  return { resultado: esPar }
}

export default mejorParidadAction
