import { bot } from "./bot.js";
import DeleteUser from "./deleteUser.js";
import AddUser from "./addUser.js";
async function RouterCommands() {
    try {
        bot.on("message", (msg)=> {
            const text = msg.text

            switch (text) {
                case "/delete_me":
                    DeleteUser(msg)
                    break;
                
                case "/add_me":
                    AddUser(msg)
                    break;
                
                default:
                    bot.sendMessage(msg.chat.id, "Don't understand")
                    break;
            }

        })
    } catch (error) {
        console.log("Router.js Router Commands error ________", error)
    }
}

export default RouterCommands