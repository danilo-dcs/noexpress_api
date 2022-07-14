
import { parse } from "node:url"
import { allRoutes } from "./routes/index.js"
import { DEFAULT_HEADER } from "./utils/requests.js"

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

const errorHandler = (response) => {
    return error => {
        console.log("***\n", error.stack);
        response.writeHead(500, DEFAULT_HEADER);
        response.write(JSON.stringify({
            error: "Internal server error!",
            status: 500
        }))
        response.end()
    }
}

export { handler }