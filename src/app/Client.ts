import { IContext } from "types";
import MessageParser from "../services/MessageService";
import WikiService from "../services/WikiService";

const wikiService = new WikiService();
const msgService = new MessageParser();
// const responseService = new ResponseBuilder();

class Client {
  private defaultResponse: string =
    "I am not sure I quite understand that, sorry";
  constructor() {
    console.log("Initialized a new client");
  }

  handleStart(ctx: IContext) {
    ctx.reply("Starting application...");
  }
  handleSticker(ctx: IContext) {
    ctx.reply("Thanks for the sticker");
  }

  async handleMessage(this: Client, ctx: IContext) {
    // Casting to 'any' in order to access 'text' property
    const msg: string = (<any>ctx).update.message.text;

    console.log(msg);
    let response: any;
    if (msgService.isQuestion(msg)) {
      const query = msgService.parseQuestion(msg);
      await this.searchWiki(query, ctx);
      return;
    }
    ctx.reply(this.defaultResponse);
  }

  async searchWiki(this: Client, query: string, ctx: IContext) {
    const hits = await wikiService.search(query);
    console.log(hits);
  }
}

export default Client;
