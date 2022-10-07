import {Test} from '../handlers/userHandler'

export const TestOptions = {
    schema: {
        tags: ["Test"],
        response: {
            200: {
                type: "object",
                properties: {
                    name: {type: "string"}
                },
            },
            400: {
                type: "object",
                properties: {
                    message: {type: "string"}
                }
            }
        },
    },
    handler: Test,
}
