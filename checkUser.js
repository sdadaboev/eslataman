import User from "./models/user.js";
import { bot } from "./bot.js";

async function CheckUser(msgParam ) {
    try {
        const chatId = msgParam.chat.id
        const fullName = msgParam.chat.first_name
        
        let checkUser = await User.findOne({chatId: chatId}).lean()

        if(!checkUser) {
            await bot.sendMessage(chatId, "Sizni bazaga qo'shamiza , siz ro'yxatdan o'tmagan ekansiz")
            const newUser = new User({
                fullName: fullName,
                chatId: chatId,
                admin: false
            })
            //TODO sho'tga addUser funksiyasini qo'shish
            console.log("New user __________", newUser)
            const createdUser = await newUser.save()
            await bot.sendMessage(chatId, `Added User: \n${createdUser}` )
        }else {
            await bot.sendMessage(chatId, "Do'stim marhamat, hush kelibsiz")
        }

    } catch (error) {
        console.log(`checkUser.js Check User Error->`,error )}
}

export default CheckUser