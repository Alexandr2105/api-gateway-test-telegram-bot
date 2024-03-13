import amqp from "amqplib";
import {settings} from "../../settings";

export class RabbitMQAdapter {
    async connectToRabbitMQ() {
        const connection = await amqp.connect(settings.RABBIT_MQ!);
        const channel = await connection.createChannel();
        const queue = 'telegram_bot_queue';

        await channel.assertQueue(queue, {durable: false});

        return {connection, channel, queue};
    };
}