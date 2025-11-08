import desglosarStringAction from "./actions/desglosarString.action"
import twoSumAction from "./actions/twoSum.action"
import conversionRomanaAction from "./actions/conversionRomana.action"
import descomposicionAction from "./actions/descomposicion.action"

type Taller03Type = number | number[] | string[] | undefined

async function desglosarStringController(str: string, strcond: string): Promise<Taller03Type> {
  const resultado = desglosarStringAction(str, strcond)
  return resultado
}

async function twoSumController(listnum: number[], num: number): Promise<Taller03Type> {
  const resultado = twoSumAction(listnum, num)
  return resultado
}

async function conversionRomanaController(numRomano: string): Promise<Taller03Type> {
  const resultado = conversionRomanaAction(numRomano)
  return resultado
}

async function descomposicionController(str: string): Promise<Taller03Type> {
  const resultado = descomposicionAction(str)
  return resultado
}

export {
  desglosarStringController,
  twoSumController,
  conversionRomanaController,
  descomposicionController,
}
