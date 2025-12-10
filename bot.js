import TelegramBot from 'node-telegram-bot-api'
import 'dotenv/config'
const TOKEN = process.env.BOT_TOKEN
export  const bot = new TelegramBot(TOKEN, {polling: true})

