export default class MessageParser {
  readonly searchRegex: RegExp = /(?<=explain\s+).+/is;
  readonly greetingRegex: RegExp = /[hello,hi,hey,what's up]/is;
  readonly confusedRegex: RegExp = /[huh,idk]/is;

  constructor() {
    console.log("Initializing a new message parser");
  }

  parseSearchKey(text: string): string {
    const searchKey = text.match(this.greetingRegex)[0];
    return searchKey;
  }
}
