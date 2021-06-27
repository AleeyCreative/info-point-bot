import { Context } from "telegraf";
import MessageParser from "./MessageParser";

const mp = new MessageParser();

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
    // Casting to any in order to access 'text' property
    const msg: string = (<any>ctx).message.text;
    console.log(msg);
    let response: string;
    if (mp.searchRegex.test(msg)) {
      response = this.handleSearch(mp.parseSearchKey(msg));
    }

    ctx.reply(response);
  }
  handleSearch(searchString: string): string {
    return searchString;
  }
  buildRequestURL(searchString: string, options?: object): string {
    const requestURL = `https:api.wikipedia.org/search?word=${searchString}`;
    return requestURL;
  }
}

export default Client;
