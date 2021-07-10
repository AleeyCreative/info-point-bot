export default class MessageParser {
  readonly searchRegex: RegExp = /(?<=explain) w+/is;
  readonly greetingRegex: RegExp = /[hello,hi,hey,what's up]/is;
  readonly confusedRegex: RegExp = /[huh,idk]/is;

  constructor() {
    console.log("Initializing a new message parser");
  }

  parseSearchKey(text: string): string {
    const searchKey = text.match(this.greetingRegex);
    console.log(searchKey);
    return "successful";
  }
}
