import { Telegraf } from "telegraf";
import * as dotenv from "dotenv";
dotenv.config();

import Client from "./Client";
import * as registry from "./registry";

const token = process.env.BOT_TOKEN as string;
const bot = new Telegraf(token);
const client = new Client();
function main() {
  //   Startup, messages and emojis
  bot.start(client.handleStart);
  bot.on(registry.sticker, client.handleSticker);
  bot.on(registry.message, client.handleMessage);
  // Commands

  // Launching bot
  console.log("Starting bot");
  bot.launch();
}

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));

main();
