
import { parse } from "node:url"
import { allRoutes } from "./routes/all.routes.js"

const handler = async (request, response) => {

    const { body , url, method } = request

    const { 
        pathname 
    } = parse(url, true)

    const key = `${pathname}:${method.toLowerCase()}`

    const chosenRoute = allRoutes[key] || allRoutes.deafult

    return Promise.resolve(chosenRoute(request, response))
    .catch(errorHandler(response))
} 

export { handler }