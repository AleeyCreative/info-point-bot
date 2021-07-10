export default class MessageParser {
  readonly searchRegex: RegExp = /(?<=explain\s+).+/i;
  readonly greetingRegex: RegExp = /[hello,hi,hey,what's up]/i;
  readonly confusedRegex: RegExp = /[huh,idk]/i;

  constructor() {
    console.log("Initializing a new message parser");
  }

  parseSearchKey(this: MessageParser, text: string): string {
    const matchArray = text.match(this.searchRegex);
    console.log(matchArray);
    return matchArray[0];
  }
}
