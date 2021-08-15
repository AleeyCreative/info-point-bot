import { IWikiList, IWikiResponse } from "../interfaces";

export default class ContextService {
  constructor() {
    console.log("New context service instance created");
  }
  ctxForSearch(searchResponse: IWikiResponse): string {
    return searchResponse.title;
  }
}
