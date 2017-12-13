const PREFIX = '$$route_'

function route (method, path, ...middleware) {
  return function (target, name) {
    target[`${PREFIX}${name}`] = {
      method: method,
      path: path,
      middleware: middleware
    }
  }
}

export function Controller (ctrlPath, ...ctrlMiddleware) {
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

export function All (path, ...middlewares) {
  return route('all', path, middlewares)
}

export function Del (path, ...middlewares) {
  return route('delete', path, middlewares)
}

export function Get (path, ...middlewares) {
  return route('get', path, middlewares)
}

export function Patch (path, ...middlewares) {
  return route('patch', path, middlewares)
}

export function Post (path, ...middlewares) {
  return route('post', path, middlewares)
}

export function Put (path, ...middlewares) {
  return route('put', path, middlewares)
}
