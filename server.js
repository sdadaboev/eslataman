import express from 'express'
import MongoConnect from './mongoConnect.js'
import 'dotenv/config'



const PORT = process.env.PORT
const server = express()

server.use(express.json())





async function StartServer() {
    try {
        await MongoConnect()
        server.listen(PORT, ()=> {
        console.log(`Server started on port ${PORT}`)
})
    } catch (error) {
        console.log("Server start error _______-", error)
    }
}

export default StartServer



