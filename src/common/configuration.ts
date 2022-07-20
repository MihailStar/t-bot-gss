import dotenv from 'dotenv';
import assert from 'assert';

dotenv.config();

const environmentVariableKeys = [
  'NODE_ENV',
  'BOT_TOKEN',
  'SPREADSHEET_ID',
  'SERVICE_ACCOUNT_EMAIL',
  'SERVICE_ACCOUNT_PRIVATE_KEY',
] as const;

type EnvironmentVariableKey = typeof environmentVariableKeys[Extract<
  keyof typeof environmentVariableKeys,
  number
>];
type EnvironmentVariables = Record<EnvironmentVariableKey, string>;

const dictionary: Partial<EnvironmentVariables> = {};

environmentVariableKeys.forEach((environmentVariableKey) => {
  const environmentVariableValue = process.env[environmentVariableKey];

  assert(
    typeof environmentVariableValue === 'string',
    `No environment variable process.env.${environmentVariableKey}`
  );

  dictionary[environmentVariableKey] = environmentVariableValue;
});

type IsDevelopment = { isDevelopment: boolean };
type Configuration = Readonly<EnvironmentVariables & IsDevelopment>;

const environmentVariables = dictionary as EnvironmentVariables;
const configuration: Configuration = {
  ...environmentVariables,
  isDevelopment: environmentVariables.NODE_ENV === 'development',
} as const;

export { configuration };
