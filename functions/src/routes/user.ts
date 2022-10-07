import {TestOptions} from "../services/Users/controllers/schemas/user";

export const userRoutes =(fastify:any,options:any,done:any)=>{

    fastify.get("/test",TestOptions)
    return done()
}