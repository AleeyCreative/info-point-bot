export default class MessageParser {
    readonly searchRegex: RegExp;
    readonly greetingRegex: RegExp;
    readonly confusedRegex: RegExp;
    constructor();
    parseSearchKey(text: string): string;
}
