import { once } from 'node:events'
import { createHeroService } from '../services/createHeroService.js';
import { DEFAULT_HEADER } from '../utils/requests.js';

const heroesRoutes = {
    "/heroes:post": async (request, response) => {

        const requestData = await once(request, 'data')
        const info = JSON.parse(requestData)

        const newHero = await createHeroService(info);

        response.writeHead(201, DEFAULT_HEADER)
        response.write(JSON.stringify(newHero))
        response.end()
    },

    "/heroes:get": async (request, response) => {
        console.log("GETTING HEROES!")
        response.end()
    },

    "/heroes:patch": async (request, response) => {
        console.log("PATCHING HEROES!")
        response.end()
    },

    "/heroes:put": async (request, response) => {
        console.log("PUTTING HEROES!")
        response.end()
    },

    "/heroes:delete": async (request, response) => {
        console.log("DELETING HEROES!")
        response.end()
    },
}

export { heroesRoutes }