import 'dotenv/config'
import CheckUser from './checkUser.js'

import { bot } from './bot.js'
async function Authorization () {
    try {
        bot.on("message", async (msg) => {
           if(msg.text ==='/start') {
            console.log(msg)
            if(await CheckUser(msg)) { 
                return bot.sendMessage(msg.chat.id, "Marhamat do'stim , Sizga do'stup ochiq")
            }else {
                return bot.sendMessage(msg.chat.id, "Siz bazaga qo'shilmagansiz")
            }
            
           }

        //    console.log(msg)
           
         bot.on('audio', async (msg)=> {
                console.log(msg)
                const fileId = msg.audio.file_id
                await bot.sendAudio(msg.chat.id, fileId)
           })  

        })
    } catch (error) {
        console.log(error)
    }

}

export default Authorization