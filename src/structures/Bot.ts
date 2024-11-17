import {Client, Collection, IntentsBitField, Partials} from 'discord.js'
import Command from "./Command";
import BotEvent from "./Event";

export default class Bot {
    client: Client
    commands: Collection<string, Command>
    events: Collection<string, BotEvent<any>>

    constructor() {
        this.client = new Client({
            intents: [
                IntentsBitField.Flags.Guilds,
                IntentsBitField.Flags.GuildMessages,
                IntentsBitField.Flags.GuildMessageReactions,
                IntentsBitField.Flags.MessageContent,
                IntentsBitField.Flags.GuildMembers,
                IntentsBitField.Flags.GuildPresences,
                IntentsBitField.Flags.DirectMessages,
                IntentsBitField.Flags.DirectMessageReactions,
            ],
            partials: [
                Partials.Channel,
                Partials.GuildMember,
                Partials.Message,
                Partials.Reaction,
            ]
        })

        this.commands = new Collection()
        this.events = new Collection()
    }

    async start() {
        await this.client.login(process.env.BOT_TOKEN)
        console.log('Bot is running!')
    }
}