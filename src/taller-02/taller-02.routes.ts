import { Router, Request, Response } from "express"
import { findMax, findMin, includes, sum, missingNumbers } from "./taller-02.controller"

const taller02Routes = Router()

taller02Routes.post("/findmax", async (req: Request, res: Response) => {
  const { list } = req.body
  const maximo = await findMax(list)
  res.status(200).json({ maximo })
})

taller02Routes.post("/findmin", async (req: Request, res: Response) => {
  const { list } = req.body
  const minimo = await findMin(list)
  res.status(200).json({ minimo })
})

taller02Routes.post("/includes", async (req: Request, res: Response) => {
  const { list, num } = req.body
  const incluye = await includes(list, num)
  res.status(200).json({ incluye })
})

taller02Routes.post("/sum", async (req: Request, res: Response) => {
  const { list } = req.body
  const suma = await sum(list)
  res.status(200).json({ suma })
})

taller02Routes.post("/missingnumbers", async (req: Request, res: Response) => {
  const { list } = req.body
  const missingnumbers = await missingNumbers(list)
  res.status(200).json({ missingnumbers })
})

export default taller02Routes
