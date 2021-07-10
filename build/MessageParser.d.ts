export default class MessageParser {
    readonly searchRegex: RegExp;
    readonly greetingRegex: RegExp;
    readonly confusedRegex: RegExp;
    constructor();
    parseSearchKey(this: MessageParser, text: string): string;
}
