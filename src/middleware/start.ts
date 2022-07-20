import { Composer } from 'telegraf';

const composer = new Composer();

composer.start(async (ctx) => {
  try {
    const text = 'Заготовка Telegram бота для работы с Google таблицами';

    await ctx.reply(text);
  } catch (reason) {
    console.error(reason);
  }
});

export { composer as start };
