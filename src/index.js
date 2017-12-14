import { Router } from 'express'
import { Controller, All, Delete, Get, Patch, Post, Put } from './decorators'

function expresstful (controllers) {
  const router = new Router()

  if (controllers) {
    for (let [name, Controller] of Object.entries(controllers)) {
      const instance = new Controller()

      for (const {method, path, middleware, routeFn} of instance.$routes) {
        router[method](path, ...middleware, instance[routeFn].bind(instance))
      }
    }
  }

  return router
}

export default expresstful
export {
  Controller,
  All,
  Delete,
  Get,
  Patch,
  Post,
  Put
}
