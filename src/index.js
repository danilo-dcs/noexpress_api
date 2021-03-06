import http from 'node:http'
import dotenv from 'dotenv'
import { handler } from './handler.js';
import { terminate } from './terminate.js';

dotenv.config();

const server = http.createServer(handler)

server.listen(process.env.PORT || 3000, () => {
    console.log(`\n[noexpress_api] Runing at localhost ${process.env.PORT || 3000}\n`)
})

// // Gracefull shutdown

// const exitHandler = terminate(server, {
//     coredump: false,
//     timeout: 500
// })
  
// process.on('uncaughtException', exitHandler(1, 'Unexpected Error'))
// process.on('unhandledRejection', exitHandler(1, 'Unhandled Promise'))
// process.on('SIGTERM', exitHandler(0, 'SIGTERM'))
// process.on('SIGINT', exitHandler(0, 'SIGINT'))


export { server }