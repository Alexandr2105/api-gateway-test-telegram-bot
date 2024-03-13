import {Router} from "express";
import {TelegramController} from "../controllers/telegram.controller";

export const telegramBotRouter = Router();

const telegramController = new TelegramController();

telegramBotRouter.post("/webhook", telegramController.telegramHook.bind(telegramController));