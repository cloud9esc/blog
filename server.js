const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const { loadPosts } = require('./lib/repository');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    if (pathname === '/contents/posts'){
      loadPosts(query).then(data => {
        res.write(JSON.stringify(data));
        res.end();
      })
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})