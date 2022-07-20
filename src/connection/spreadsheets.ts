import { GoogleSpreadsheet } from 'google-spreadsheet';
import { configuration } from '../common/configuration';

const spreadsheets = new GoogleSpreadsheet(configuration.SPREADSHEET_ID);

async function bootstrap(): Promise<void> {
  await spreadsheets.useServiceAccountAuth({
    client_email: configuration.SERVICE_ACCOUNT_EMAIL,
    private_key: configuration.SERVICE_ACCOUNT_PRIVATE_KEY.replace(
      // unescape
      /\\n/g,
      '\n'
    ),
  });

  await spreadsheets.loadInfo();
}

export { spreadsheets, bootstrap };
