const path = require('path')
const TelegramBot = require('node-telegram-bot-api');

require('dotenv').config()

const bot = new TelegramBot(process.env.TG_TOKEN, {polling: true});
const webAppUrl = process.env.CLIENT_URL;

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
  
    if (text === '/start') {
      await bot.sendMessage(chatId, 'Start farm coins for free', {
          reply_markup: {
              inline_keyboard: [
                  [{text: "Play in 1 click!", web_app: {url: webAppUrl}}]
              ]
          }
        });
    }
  });

// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;
//   bot.sendMessage(chatId, 'Received your message');
// });