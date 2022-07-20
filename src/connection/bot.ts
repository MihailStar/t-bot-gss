import { Telegraf } from 'telegraf';
import { MyContext } from '../types';
import { configuration } from '../common/configuration';

const bot = new Telegraf<MyContext>(configuration.BOT_TOKEN);

async function bootstrap(): Promise<void> {
  await bot.launch();
}

export { bot, bootstrap };
