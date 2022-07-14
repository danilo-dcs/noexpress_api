import { HeroesService } from "../services/heroes.service.js"
import { getRequestBody } from "../utils/getRequestBody.js";

const heroesRoutes = {
    "/heroes:post": async (request, response) => {

        const heroesService = new HeroesService()

        const body =  await Promise.resolve(getRequestBody(request))

        heroesService.createHeroes(body);

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