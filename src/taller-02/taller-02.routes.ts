import { Router, Request, Response } from "express"
import { findMax, findMin, includes, sum, missingNumbers } from "./taller-02.controller"

const taller2Routes = Router()

taller2Routes.post("/findmax", async (req: Request, res: Response) => {
  const { list } = req.body
  const resultado = await findMax(list)
  res.status(200).json(resultado)
})

taller2Routes.post("/findmin", async (req: Request, res: Response) => {
  const { list } = req.body
  const resultado = await findMin(list)
  res.status(200).json(resultado)
})

taller2Routes.post("/includes", async (req: Request, res: Response) => {
  const { list, num } = req.body
  const resultado = await includes(list, num)
  res.status(200).json(resultado)
})

taller2Routes.post("/sum", async (req: Request, res: Response) => {
  const { list } = req.body
  const resultado = await sum(list)
  res.status(200).json(resultado)
})

taller2Routes.post("/missingnumbers", async (req: Request, res: Response) => {
  const { list } = req.body
  const resultado = await missingNumbers(list)
  res.status(200).json(resultado)
})

export default taller2Routes
