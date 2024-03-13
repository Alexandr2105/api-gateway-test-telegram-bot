import express, {Request, Response} from "express";
import {settings} from "./settings";
import {TelegramAdapter} from "./adapters/telegramAdapter/telegram.adapter";
import {telegramBotRouter} from "./routers/telegram.bot.route";
const app = express();
// const port = settings.PORT;

app.use(express.json());

app.use("/telegram", telegramBotRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });

async function start() {
    let baseUrl = settings.CURRENT_APP_BASE_URL;
    const telegramAdapter = new TelegramAdapter();
    if (!baseUrl) {
        baseUrl = await telegramAdapter.connectToNgrok();
    }
    await telegramAdapter.sendOurHookForTelegram(
        baseUrl + '/telegram/webhook',
    );
}
start();