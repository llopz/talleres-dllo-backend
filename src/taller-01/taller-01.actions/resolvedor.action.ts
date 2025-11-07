import { Taller01Type } from "../taller-01.model"

async function resolvedorAction(
  a: number,
  b: number,
  c: number,
  signo: boolean
): Promise<Taller01Type> {
  const x = signo
    ? (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a)
    : (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a)

  return { resultado: x }
}

export default resolvedorAction
