import * as functions from 'firebase-functions'
import * as http from 'http'
import Fastify from 'fastify'
import fastifySwagger from "@fastify/swagger"
import swaggerDocument from "./swaggerConfig"
import fastifyCors from "@fastify/cors"
import {userRoutes} from "./routes/user";

let handleRequest:any

const serverFactory = (handler:any, opts:any) => {
  handleRequest = handler
  return http.createServer()
}
const fastify = Fastify({serverFactory})

fastify.register(fastifySwagger,{
  routePrefix: '/docs',
  exposeRoute:true,
  swagger:swaggerDocument
})

fastify.register(fastifyCors,{
  origin:"*"
})

fastify.get('/', (req:any, reply:any) => {
  reply.send({ hello: 'world' })
})

fastify.register(userRoutes)

exports.api = functions.https.onRequest((req:any, res:any) => {
  fastify.ready((err:Error) => {
    if (err) throw err
    handleRequest(req, res)
  })
})