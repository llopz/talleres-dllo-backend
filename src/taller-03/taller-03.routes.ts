import { Router, Request, Response } from "express"
import {
  desglosarStringController,
  twoSumController,
  conversionRomanaController,
  descomposicionController,
} from "./taller-03.controller"

const taller03Routes = Router()

taller03Routes.post("/desglosarstring", async (req: Request, res: Response) => {
  const { str, strcond } = req.body
  const resultado = await desglosarStringController(str, strcond)
  res.status(200).json({ [strcond]: resultado })
})

taller03Routes.post("/twosum", async (req: Request, res: Response) => {
  const { listnum, num } = req.body
  const combinacion = await twoSumController(listnum, num)
  res.status(200).json({ combinacion })
})

taller03Routes.post("/conversionromana", async (req: Request, res: Response) => {
  const { numRomano } = req.body
  const numdecimal = await conversionRomanaController(numRomano)
  res.status(200).json({ numdecimal })
})

taller03Routes.post("/descomposicion", async (req: Request, res: Response) => {
  const { str } = req.body
  const partes = await descomposicionController(str)
  res.status(200).json({ partes })
})

export default taller03Routes
