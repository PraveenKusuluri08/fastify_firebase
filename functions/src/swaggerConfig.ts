let SwaggerOpts = {
    info: {
        title: "Node and fastify and firebase",

        version: "1.0.0"
    },
    host: "http://localhost:5000/",
    schemas: ["http", "https"],
    tags: [{name: "User", description: "All user endpoints exist here"},
        {name:"Test",description:"Test routes"}
    ]
}
export default SwaggerOpts