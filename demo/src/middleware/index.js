export function auth (req, res, next) {
  console.log('auth middleware')
  next()
}

export function log (req, res, next) {
  console.log('logging middleware')
  next()
}

export function test (req, res, next) {
  console.log('test middleware')
  next()
}
