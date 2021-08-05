export default class MessageParser {
    readonly searchRegex: RegExp;
    readonly greetingRegex: RegExp;
    readonly confusedRegex: RegExp;
    constructor();
    isQuestion(text: any): boolean;
    parseQuestion(msg: string): string;
}
