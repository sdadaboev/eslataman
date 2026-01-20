import 'dotenv/config'

import StartServer from './server.js'
import Authorization from './Authorization.js'
import RouterCommands from './routers.js'

StartServer() // server start boo'ladi va mongoDB ga ulanadi
Authorization() // Bu yerda user database da bormi? yoki yo'qmi tekshiradi
RouterCommands()
