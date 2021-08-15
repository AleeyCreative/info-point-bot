import { IWikiResponse } from "interfaces";
export default class MessageParser {
    readonly searchRegex: RegExp;
    readonly greetingRegex: RegExp;
    readonly confusedRegex: RegExp;
    readonly defaultResponse = "I'm not quite sure I understand what you mean, sorry!";
    constructor();
    isQuestion(text: any): boolean;
    parseQuestion(msg: string): string;
    buildSearchResponse: (resData: IWikiResponse) => string;
}
