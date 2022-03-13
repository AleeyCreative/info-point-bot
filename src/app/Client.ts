import { IWikiList, IWikiResponse } from "interfaces";
import ContextService from "../services/ContextService";
import { IContext, SearchResponse } from "types";
import MessageParser from "../services/MessageService";
import WikiService from "../services/WikiService";

const wikiService = new WikiService();
const msgService = new MessageParser();
const ctxService = new ContextService();
// const responseService = new ResponseBuilder();

class Client {
  constructor() {
    console.log("Initialized a new client");
  }

  handleStart(ctx: IContext) {
    ctx.reply("Starting application...");
  }
  handleSticker(ctx: IContext) {
    ctx.reply("Thanks for the sticker");
  }

  handleMessage = async (ctx: IContext) => {
    // Casting to 'any' in order to access 'text' property
    const msg: string = (<any>ctx).update.message.text;

    console.log(msg);
    let response: any;
    if (msgService.isQuestion(msg)) {
      const query: string = msgService.parseQuestion(msg);
      await this.searchWiki(ctx, query);
      return;
    }
    ctx.reply("Sorry, did not understand that !");
  };

  searchWiki = async (ctx: IContext, query: string) => {
    const response: SearchResponse = await wikiService.search(query);
    if (response) {
      const searchResponse: string = msgService.buildSearchResponse(response);
      const ctxData = ctxService.ctxForSearch(response);
      // ctx.session.title = ctxData;
      ctx.reply(searchResponse, { parse_mode: "MarkdownV2" });
    }
  };
}

export default Client;
