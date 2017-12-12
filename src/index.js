import { Router } from 'express'
import { resource, all, del, get, post, put } from './decorators'

function expresstful (resources) {
  const router = new Router()

  if (resources) {
    for (let [name, Resource] of Object.entries(resources)) {
      const instance = new Resource()

      for (const {method, path, middleware, routeFn} of instance.$routes) {
        router[method](path, ...middleware, instance[routeFn].bind(instance))
      }
    }
  }

  return router
}

export default expresstful
export {
  resource,
  all,
  del,
  get,
  post,
  put
}
