import { IWikiResponse } from "../interfaces";
export default class ContextService {
    constructor();
    ctxForSearch(searchResponse: IWikiResponse): string;
}
