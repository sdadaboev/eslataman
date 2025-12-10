import mongoose from "mongoose";
import 'dotenv/config'
const mongoURI = process.env.MONGO_URI


async function MongoConnect() {
    try {
        await mongoose.connect(`${mongoURI}`)
        console.log("connected to mongoDB")
        

    } catch (error) {
        console.log("mongo Connect Error________________", error)
    }
}

export default MongoConnect