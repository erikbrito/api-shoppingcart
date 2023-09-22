const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middleware = jsonServer.defaults()
const port = 5000

server.use(middleware)
server.use(router)

console.log(`to open: http://localhost:5000

`)
console.log(`http://localhost:5000/products`)
console.log(`http://localhost:5000/categories`)

server.listen(port, () => {
  console.log('JSON Server is running')
})