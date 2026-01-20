import { bot } from "./bot.js";
import User from "./models/user.js";
import CheckUser from "./checkUser.js";


async function AddUser(msgParam) {
    const chatId = msgParam.chat.id
        const fullName = msgParam.chat.first_name
        const addingUser = new User({
            fullName: fullName,
            chatId: chatId,
            admin: false
    })

    try {
        if(await CheckUser(msgParam)) {
            await bot.sendMessage(chatId, "You already exist in database")
        }else {
            await bot.sendMessage(chatId, "Please wait.....")
            const addedUser = await addingUser.save()
            console.log(addedUser)

            await bot.sendMessage(chatId, "You successfully added to database")
            await bot.sendMessage(chatId, `Your data entity is:\n ${addedUser}` )
           
        }
        
    } catch (error) {
        bot.sendMessage(chatId, "We cannot add you there is some issue")
        console.log("DeleteUser.js delete error : ________", error)
    }
}

export default AddUser