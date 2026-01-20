import { bot } from "./bot.js";
import CheckUser from "./checkUser.js";
import User from "./models/user.js";

async function DeleteUser(msgParam) {
    const chatId = msgParam.chat.id
    try {
        if(await CheckUser(msgParam)) {
            await bot.sendMessage(chatId, "Deleting ...")
            await User.deleteOne({chatId})
            await bot.sendMessage(chatId, "I deleted you from Database")
            
        }else {
            await bot.sendMessage(chatId, "You already deleted")
        }
        
    } catch (error) {
        bot.sendMessage(chatId, "We cannot delete you there is some issue")
        console.log("DeleteUser.js delete error : ________", error)
    }
}

export default DeleteUser