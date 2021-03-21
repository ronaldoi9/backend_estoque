import { createProductController } from '@/main/factories/product-create-controller'
import { readProductController } from '@/main/factories/product-read-controller'
import { updateProductController } from '@/main/factories/product-update-controller'
import { deleteProductController } from '@/main/factories/product-delete-controller'

import { Request, Response, Router } from 'express'

export default (router: Router): void => {
  router.post('/product', async (req: Request, res: Response) => {
    const controller = createProductController()
    const httpResponse = await controller.handle(req.body)
    res.status(httpResponse.statusCode).json(httpResponse.data)
  })

  router.get('/product', async (req: Request, res: Response) => {
    const controller = readProductController()
    const httpResponse = await controller.handle()
    res.status(httpResponse.statusCode).json(httpResponse.data)
  })

  router.get('/product/:id', async (req: Request, res: Response) => {
    const controller = readProductController()
    const httpResponse = await controller.handle({ id: req.params.id })
    res.status(httpResponse.statusCode).json(httpResponse.data)
  })

  router.put('/product/:id', async (req: Request, res: Response) => {
    const controller = updateProductController()
    const httpResponse = await controller.handle({
      ...req.body,
      id: req.params.id
    })
    res.status(httpResponse.statusCode).json(httpResponse.data)
  })

  router.delete('/product/:id', async (req: Request, res: Response) => {
    const controller = deleteProductController()
    const httpResponse = await controller.handle({ id: req.params.id })
    res.status(httpResponse.statusCode).json(httpResponse.data)
  })
}
