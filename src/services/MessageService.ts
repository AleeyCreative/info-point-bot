import { capitalize } from "lodash";
import { IWikiResponse } from "interfaces";

export default class MessageParser {
  readonly searchRegex: RegExp = /(?<=explain\s+).+/i;
  readonly greetingRegex: RegExp = /[hello,hi,hey,what's up]/i;
  readonly confusedRegex: RegExp = /[huh,idk]/i;
  readonly defaultResponse =
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
    const footMessage = `**Sourced from Wikipedia under [CC-BY-SA license](https://creativecommons.org/licenses/by-sa/3.0/)**`;
    return `<h2> ${capitalize(resData.title)} </h2>
    ${resData.extract}
    
    ----------------------------
    **${footMessage}**
    `;
  };
}
