import { Telegraf } from 'telegraf';
import { configuration } from '../common/configuration';

const logger = Telegraf.optional(
  () => configuration.isDevelopment,
  Telegraf.log()
);

export { logger };
