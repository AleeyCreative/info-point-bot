import { Context } from "telegraf";

class Client {
  constructor() {
    console.log("Initialized a new client");
  }
  handleStart(ctx: Context) {
    ctx.reply("Starting application...");
  }
  handleSticker(ctx: Context) {
    ctx.reply("Thanks for the sticker");
  }
  handleMessage(ctx: Context) {
    // const message: string = ctx.message?.message_id || "";
    console.log(ctx.message.text);
    ctx.reply("Awwn! Thank you");
  }
  handleSearch(ctx: Context) {
    console.log(ctx);
    ctx.reply("Let me see, please wait...");
  }
}

export default Client;
