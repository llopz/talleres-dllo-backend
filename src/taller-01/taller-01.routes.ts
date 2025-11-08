import { Router, Request, Response } from "express"
import { convertidorTemp, resolvedor, mejorParidad, peorParidad } from "./taller-01.controller"

const taller01Routes = Router()

// POST /api/v1/taller-01/convertidortemp
taller01Routes.post("/convertidortemp", async (req: Request, res: Response) => {
  const { tempc } = req.body
  const fahrenheit = await convertidorTemp(Number(tempc))
  res.status(200).json({ fahrenheit })
})

// POST /api/v1/taller-01/resolvedor
taller01Routes.post("/resolvedor", async (req: Request, res: Response) => {
  const { a, b, c, signo } = req.body
  const resultado = await resolvedor(Number(a), Number(b), Number(c), Boolean(signo))
  res.status(200).json({ resultado })
})

// POST /api/v1/taller-01/mejorparidad
taller01Routes.post("/mejorparidad", async (req: Request, res: Response) => {
  const { x } = req.body
  const resultado = await mejorParidad(Number(x))
  res.status(200).json({ resultado })
})

// POST /api/v1/taller-01/peorparidad
taller01Routes.post("/peorparidad", async (req: Request, res: Response) => {
  const { x } = req.body
  const resultado = await peorParidad(Number(x))
  res.status(200).json({ resultado })
})

// EXPORTAR RUTAS
export default taller01Routes
