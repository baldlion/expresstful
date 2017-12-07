import { Router } from 'express'

export function expresstful (controllers) {
  const router = new Router()

  controllers.forEach(Controller => {
    const instance = new Controller()

    for (const {method, path, middleware, routeFn} of instance.$routes) {
      router[method](path, ...middleware, instance[routeFn].bind(instance))
    }
  })

  return router
}
