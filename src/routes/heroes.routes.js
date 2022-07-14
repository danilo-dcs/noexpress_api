const heroesRoutes = {
    "/heroes:post": async (request, response) => {
        console.log("POSTING HEROES!")
        response.end("Success!")
    },

    "/heroes:get": async (request, response) => {
        console.log("GETTING HEROES!")
        response.end("Success!")
    },

    "/heroes:patch": async (request, response) => {
        console.log("PATCHING HEROES!")
        response.end("Success!")
    },

    "/heroes:put": async (request, response) => {
        console.log("PUTTING HEROES!")
        response.end("Success!")
    },

    "/heroes:delete": async (request, response) => {
        console.log("DELETING HEROES!")
        response.end("Success!")
    },
}

export { heroesRoutes }