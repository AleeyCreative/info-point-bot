import { Telegraf } from "telegraf";
import * as dotenv from "dotenv";
dotenv.config();

import Client from "./Client";
import * as registry from "./registry";

const bot = new Telegraf("1846812149:AAHqIstra9oZ-LJn9KGVOXF3FS2JE3deFGQ");
const client = new Client();
function main(): void {
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
