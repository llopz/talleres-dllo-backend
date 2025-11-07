import { Taller01Type } from "./taller-01.model"
import convertidorTempAction from "./actions/convertidorTemp.action"
import resolvedorAction from "./actions/resolvedor.action"
import mejorParidadAction from "./actions/mejorParidad.action"
import peorParidadAction from "./actions/peorParidad.action"

async function convertidorTemp(tempc: number): Promise<Taller01Type> {
  return await convertidorTempAction(tempc);
}

async function resolvedor(a: number, b: number, c: number, signo: boolean): Promise<Taller01Type> {
  return await resolvedorAction(a, b, c, signo);
}

async function mejorParidad(x: number): Promise<Taller01Type> {
  return await mejorParidadAction(x);
}

async function peorParidad(x: number): Promise<Taller01Type> {
  return await peorParidadAction(x);
}

export { convertidorTemp, resolvedor, mejorParidad, peorParidad };
