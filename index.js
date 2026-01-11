import { Client, GatewayIntentBits } from "discord.js";
import { paginatedSearch } from "./commands/paginatedSearch.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once("ready", () => {
  console.log(`✅ Bot logged in as ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith("!بحث")) {
    await paginatedSearch(message);
  }
});

client.login(process.env.DISCORD_TOKEN);
