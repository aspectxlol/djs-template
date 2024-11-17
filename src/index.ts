import 'dotenv/config'
import Bot from './structures/Bot'

(async () => {
    const bot = new Bot()
    await bot.start()
})()
