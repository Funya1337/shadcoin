const path = require('path')
const TelegramBot = require('node-telegram-bot-api');

require('dotenv').config()

const bot = new TelegramBot(process.env.TG_TOKEN, {polling: true});
const webAppUrl = 'https://ya.ru';

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
  
    if (text === '/start') {
      await bot.sendMessage(chatId, 'Make an order!', {
          reply_markup: {
              inline_keyboard: [
                  [{text: "Make an order", web_app: {url: webAppUrl}}]
              ]
          }
        });
    }
  });

// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;
//   bot.sendMessage(chatId, 'Received your message');
// });