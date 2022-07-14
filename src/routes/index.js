import { DEFAULT_HEADER } from "../utils/requests.js"
import { heroesRoutes } from "./heroes.routes.js"

const allRoutes = {
    
    ...heroesRoutes,

    deafult: (request, response) => {
        response.writeHead(404, DEFAULT_HEADER)
        response.end("Not Found!")
    },
}

export { allRoutes }