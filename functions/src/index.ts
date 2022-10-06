const functions = require('firebase-functions')
const http = require('http')
const Fastify = require('fastify')

let handleRequest:any

const serverFactory = (handler:any, opts:any) => {
  handleRequest = handler
  return http.createServer()
}
const fastify = Fastify({serverFactory})

fastify.get('/', (req:any, reply:any) => {
  reply.send({ hello: 'world' })
})

exports.api = functions.https.onRequest((req:any, res:any) => {
  fastify.ready((err:Error) => {
    if (err) throw err
    handleRequest(req, res)
  })
})