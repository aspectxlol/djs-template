import {Client, IntentsBitField, Partials} from 'discord.js'

export default class Bot {
    client: Client
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
    }

    async start() {
        await this.client.login(process.env.BOT_TOKEN)
        console.log('Bot is running!')
    }
}