import { Request, Response, Router } from 'express'

const routes = Router()

routes.get('/', (req: Request, res: Response) => {
  res.send({ response: 'I am alive' }).status(200)
})
routes.get('/health', (req: Request, res: Response) => {
  res.send({ response: 'Ok' }).status(200)
})
routes.get('/health/ping', (req: Request, res: Response) => {
  res.send({ response: 'pong' }).status(200)
})

export default routes
