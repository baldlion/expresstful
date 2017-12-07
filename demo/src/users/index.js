import { controller, get } from 'expresstful'

@controller('/users')
export class Users {
  @get('/')
  root (req, res) {
    res.send('users')
  }

  @get('/all')
  all (req, res) {
    res.json([
      {
        username: 'Frank'
      },
      {
        username: 'Jane'
      }
    ])
  }
}
