import User from "./models/user.js";
import { bot } from "./bot.js";

async function CheckUser(msgParam ) {
    try {
        const chatId = msgParam.chat.id
        let checkUser = await User.findOne({chatId}).lean()

        if(checkUser) {
            return true
        }else{
            return false
        }

    } catch (error) {
        console.log(`checkUser.js Check User Error->`,error )}
}

export default CheckUser

