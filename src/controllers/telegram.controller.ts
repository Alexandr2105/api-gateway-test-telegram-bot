import {Request, Response} from "express";
import {RabbitMQAdapter} from "../adapters/rabbitMQAdapter/rabbitMQ.adapter";

export class TelegramController {
    private rabbitMQAdapter = new RabbitMQAdapter();

    async telegramHook(req: Request, res: Response): Promise<any> {
        const data = req.body;
        const {channel, queue} = await this.rabbitMQAdapter.connectToRabbitMQ();
        channel.sendToQueue(queue, Buffer.from(JSON.stringify(data)));
        res.send(true);
    }
}