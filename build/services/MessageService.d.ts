import { IWikiResponse } from "interfaces";
export default class MessageParser {
    private searchRegex;
    private greetingRegex;
    private confusedRegex;
    private defaultResponse;
    constructor();
    isQuestion(text: any): boolean;
    parseQuestion(msg: string): string;
    buildSearchResponse: (resData: IWikiResponse) => string;
}
