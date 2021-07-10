import { Context } from "telegraf";
import MessageParser from "./MessageParser";
import Agent from "./Agent";

const agent = new Agent();
const mp = new MessageParser();

class Client {
  constructor() {
    console.log("Initialized a new client");
  }
  handleSearch(searchString: string): string {
    return searchString;
  }
  buildRequestURL(searchString: string, options?: object): string {
    const requestURL = `https:api.wikipedia.org/search?word=${searchString}`;
    return requestURL;
  }
  handleStart(ctx: Context) {
    ctx.reply("Starting application...");
  }
  handleSticker(ctx: Context) {
    ctx.reply("Thanks for the sticker");
  }
  async handleMessage(this: Client, ctx: Context) {
    // Casting to any in order to access 'text' property
    const msg: string = (<any>ctx).update.message.text;
    console.log(msg);
    let response: string;
    if (mp.searchRegex.test(msg)) {
      const searchKey = mp.parseSearchKey(msg);
      const response = await agent.makeRequest(searchKey);
      console.log(response);
    }
    ctx.reply("Searching... Please wait!");
  }
}

export default Client;
