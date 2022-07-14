import { DEFAULT_HEADER } from "../utils/requests.js"
import { heroesRoutes } from "./heroes.routes.js"


const appRouter = (key) => {

    const allRoutes = {
    
        ...heroesRoutes,
    
        deafult: (request, response) => {
            response.writeHead(404, DEFAULT_HEADER)
            response.end("Not Found!")
        },
    }
    return allRoutes[key] || allRoutes.deafult
}

export { appRouter }