import { controller, get } from 'expresstful'
import { auth, log, test } from '../middleware'

@controller('/posts', auth)
class Posts {
  @get('/', log, test)
  root (req, res) {
    res.json(this.posts)
  }

  @get('/somethingElse')
  somethingElse(req, res) {
    res.json({
      something: 'else'
    })
  }

  get posts () {
    return [
      {
        title: 'Lorem Ipsum'
      },
      {
        title: 'Dolor Sit Amat'
      }
    ]
  }
}

export { Posts }
