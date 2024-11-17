import Bot from './Bot';
import {CommandInteraction, RESTPostAPIApplicationCommandsJSONBody} from 'discord.js';

export default abstract class Command {
    data: RESTPostAPIApplicationCommandsJSONBody;

    protected constructor(data: RESTPostAPIApplicationCommandsJSONBody) {
        this.data = data;
    }

    public abstract execute(
        interaction: CommandInteraction,
        client: Bot
    ): Promise<any>;
}