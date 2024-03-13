import {config} from 'dotenv';

config();
export const settings = {
    PORT: process.env.PORT || 3000,
    TELEGRAM_TOKEN: process.env.TELEGRAM_TOKEN,
    NGROK_AUTH_TOKEN: process.env.AUTH_TOKEN_FOR_NGROK,
    CURRENT_APP_BASE_URL: process.env.CURRENT_APP_BASE_URL,
    LOCAL_ADDRESS: "https://localhost:3000",
    RABBIT_MQ: process.env.RABBIT_MQ,
}