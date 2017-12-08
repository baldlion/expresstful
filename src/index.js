import { Router } from 'express'
import { controller, all, del, get, post, put } from './decorators'

function expresstful (controllers) {
  const router = new Router()

  if (controllers) {
    controllers.forEach(Controller => {
      const instance = new Controller()

      for (const {method, path, middleware, routeFn} of instance.$routes) {
        router[method](path, ...middleware, instance[routeFn].bind(instance))
      }
    })
  }

  return router
}

export default expresstful
export {
  controller,
  all,
  del,
  get,
  post,
  put
}
