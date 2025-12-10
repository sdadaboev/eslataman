import 'dotenv/config'
import CheckUser from './checkUser.js'

import { bot } from './bot.js'
async function Authorization () {
    try {
        bot.on("message", async (msg) => {
           await bot.sendMessage(msg.chat.id, "Hello ")

           if(msg.text ==='/start') {
            console.log(msg)
            CheckUser(msg)
           }
         


        })
    } catch (error) {
        console.log(error)
    }

}

export default Authorization