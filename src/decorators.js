export const PREFIX = '$$route_'

export function resource (ctrlPath, ...ctrlMiddleware) {
  return function (target, key, descriptor) {
    const proto = target.prototype
    proto.$routes = Object.getOwnPropertyNames(proto)
      .filter(prop => prop.indexOf(PREFIX) === 0)
      .map(prop => {
        const route = proto[prop]
        const middleware = ctrlMiddleware.concat(route.middleware)
        const method = route.method
        const path = route.path.length > 1 ? route.path : ''
        const routeFn = prop.substring(PREFIX.length)

        return {
          method: method,
          path: `${ctrlPath}${path}`,
          middleware: middleware,
          routeFn: routeFn
        }
      })
  }
}

export function route (method, path, ...middleware) {
  return function (target, name) {
    target[`${PREFIX}${name}`] = {
      method: method,
      path: path,
      middleware: middleware
    }
  }
}

export function all (path, ...middlewares) {
  return route('all', path, middlewares)
}

export function del (path, ...middlewares) {
  return route('delete', path, middlewares)
}

export function get (path, ...middlewares) {
  return route('get', path, middlewares)
}

export function post (path, ...middlewares) {
  return route('post', path, middlewares)
}

export function put (path, ...middlewares) {
  return route('put', path, middlewares)
}
