import { Request, Response } from "express"
import cors from "cors"
import express from "express"

// API ROUTES IMPORTS
import taller01Routes from "./taller-01/taller-01.routes"
import taller02Routes from "./taller-02/taller-02.routes"

// MIDDLEWARES
const app = express()

app.use(cors())
app.use(express.json())

// ROUTES
const SERVER_VERSION = "/api/v1/"

app.use(SERVER_VERSION + "taller-01", taller01Routes)
app.use(SERVER_VERSION + "taller-02", taller02Routes)

// FALLBACKS

function routeNotFound(request: Request, response: Response) {
  response.status(404).json({
    message: `Route not found: ${request.originalUrl}`,
  })
}

app.use(routeNotFound)

// START SERVER
app.listen(8080, () => {
  console.log("Server listening to port 8080.")
})
