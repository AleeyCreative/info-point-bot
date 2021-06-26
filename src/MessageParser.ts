export default class MessageParser {
  readonly searchRegex: RegExp;
  readonly greetingRegex: RegExp;
  readonly confusedRegex: RegExp;
  constructor() {
    console.log("Initializing a new message parser");
    this.searchRegex = /(?<=explain\s+).+/is;
    this.greetingRegex = /[hello,hi,hey,what's up]/is;
    this.confusedRegex = /[huh,idk]/is;
  }
  //  isSearch(text:string): string | void {
  //     if(this.searchRegex)
  // }
}
