import { capitalize } from "lodash";
import { IWikiResponse } from "interfaces";

export default class MessageParser {
  private searchRegex: RegExp = /(?<=explain\s+).+/i;
  private greetingRegex: RegExp = /[hello,hi,hey,what's up]/i;
  private confusedRegex: RegExp = /[huh,idk]/i;
  private defaultResponse =
    "I'm not quite sure I understand what you mean, sorry!";
  constructor() {
    console.log("Initializing a new message parser");
  }

  isQuestion(text): boolean {
    return this.searchRegex.test(text);
  }

  parseQuestion(msg: string): string {
    const matchArray = msg.match(this.searchRegex);
    return matchArray ? matchArray[0] : "";
  }

  buildSearchResponse = (resData: IWikiResponse): string => {
    const footMessage = `Enter 1 for disambugation(${resData.title})`;
    return `
    ## ${capitalize(resData.title)}
    ${resData.extract}
    
    ----------------------------
    **${footMessage}**
    `;
  };
}
