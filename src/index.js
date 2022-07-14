import http from 'node:http'
import dotenv from 'dotenv'
import { handler } from './handler.js';

dotenv.config();

const server = http.createServer(handler)

server.listen(process.env.PORT || 3000, () => {
    console.log(`\n[noexpress_api] Runing at localhost ${process.env.PORT || 3000}\n`)
})

export { server }