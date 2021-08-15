import { IWikiResponse } from "../interfaces";
export default class WikiService {
    constructor();
    search: (query: any) => Promise<IWikiResponse | null>;
    transformResponse: (response: any) => IWikiResponse;
}
