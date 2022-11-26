const { Telegraf } = require('telegraf');

/***
 * -> How to get the secret token for creating the bot ?
 * Open Telegram and Search for BotFather
 * Read instructions 
 * Type /start and Press enter
 * To create a new bot type /newbot and Press enter
 * It will ask for a bot name without a / - Example : SarthakBot, SarthakJain_Bot
 * It will ask for a Username which is ending with bot 
 * Link to the bot - t.me/SarthakJain_Bot
 */

const bot = new Telegraf('');

bot.start((ctx) => ctx.reply('Welcome to Sarthak Bot'));  // start command
bot.help((ctx) => ctx.reply('Send me a sticker'));  // help command
bot.on('sticker', (ctx) => ctx.reply('❤️'));  // if someone sends a sticker
bot.hears('hi', (ctx) => ctx.reply('Hey there, ~Sarthak bot this side')); // if someone texts hi

bot.command('Sarthak', (ctx) => ctx.reply('Welcome to the Tech world of Sarthak 🚀'));
bot.command('WhoMadeThis', (ctx) => ctx.reply('Sarthak Jain - The Sarthak Show'));




bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));