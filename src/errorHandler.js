import { DEFAULT_HEADER } from "./utils/requests";

const errorHandler = (response) => {
    return error => {
        console.log("\n!! ERROR !!\n");
        console.log(error.stack)
        response.writeHead(500, DEFAULT_HEADER);
        response.write(JSON.stringify({
            error: "Internal server error",
            status: 500
        }))
        response.end()
    }
}

return { errorHandler }