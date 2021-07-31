import { Context } from "telegraf";
import MessageParser from "./MessageParser";
import Agent from "./Agent";
import ResponseBuilder from "./ResponseBuilder";

const agent = new Agent();
const mp = new MessageParser();
const respBuilder = new ResponseBuilder();

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

  async handleMessage(this: Client, ctx: Context) {
    // Casting to 'any' in order to access 'text' property
    const msg: string = (<any>ctx).update.message.text;
    console.log(msg);
    const defaultResponse: string =
      "I'm not sure I quite understand the message, sorry!";
    let response: any;
    if (mp.searchRegex.test(msg)) {
      // Not currently using class-own methods
      const searchKey = mp.parseSearchKey(msg);
      const hits = await agent.makeRequest(searchKey);
      console.log(hits);
      if (hits.length > 1) {
        ctx.session.options = generateOptions(hits);
        response = respBuilder.formatHits(hits);
      } else {
        console.log("nothing yet");
        // response = respBuilder.formatHit(hits[0]);
      }
      ctx.replyWithMarkdown(response);
    }
    ctx.reply(defaultResponse);
  }
}

function generateOptions(hits): Array<string> {
  let options = [];
  hits.forEach((hit, index) => {
    options[index] = hit.snippet;
  });
  return options;
}

export default Client;
