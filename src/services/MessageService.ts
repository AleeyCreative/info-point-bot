export default class MessageParser {
  readonly searchRegex: RegExp = /(?<=explain\s+).+/i;
  readonly greetingRegex: RegExp = /[hello,hi,hey,what's up]/i;
  readonly confusedRegex: RegExp = /[huh,idk]/i;

  constructor() {
    console.log("Initializing a new message parser");
  }

  isQuestion(text): boolean {
    return this.searchRegex.test(text);
  }

  parseQuestion(msg: string): string {
    const matchArray = msg.match(this.searchRegex);
    console.log(matchArray);
    return matchArray[0];
  }
}
