import express from 'express'
import morgan from 'morgan'
import { expresstful } from 'expresstful'
import { Posts } from './posts'
import { Users } from './users'

const app = express()
const port = 4000

app.use(morgan('dev'))

app.use(expresstful([
  Users,
  Posts
]))

app.listen(port, () => {
  console.log(`demo app listening on port ${port}`)
})
