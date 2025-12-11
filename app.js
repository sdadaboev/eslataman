import 'dotenv/config'

import StartServer from './server.js'
import Authorization from './Authorization.js'
import RouterCommands from './routers.js'

StartServer() // server start boo'ladi va mondoDB ga ulanadi
Authorization() 
RouterCommands()
