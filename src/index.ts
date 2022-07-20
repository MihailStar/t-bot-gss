import { bot, bootstrap as botBootstrap } from './connection/bot';
import { bootstrap as spreadsheetsBootstrap } from './connection/spreadsheets';
import { logger as loggerMiddleware } from './middleware/logger';
import { start as startMiddleware } from './middleware/start';

bot.telegram
  .setMyCommands([{ command: 'start', description: 'Стартануть' }])
  .catch(console.error);

bot.use(loggerMiddleware).use(startMiddleware);

Promise.all([botBootstrap(), spreadsheetsBootstrap()])
  .then(() => console.log('Бот запущен'))
  .catch((reason) => {
    if (reason instanceof Error) {
      throw reason;
    }

    throw new Error(String(reason));
  });

process
  .once('SIGINT', () => {
    bot.stop('SIGINT');
  })
  .once('SIGTERM', () => {
    bot.stop('SIGTERM');
  });
