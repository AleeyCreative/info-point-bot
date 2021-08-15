import axios from "axios";
import { IWikiResponse } from "../interfaces";

interface IOptions {
  srwhat?: string;
  srlimit?: number;
}

const WIKIBASE_URL = "https://en.wikipedia.org/api/rest_v1/page/summary/";

const api = axios.create({ baseURL: WIKIBASE_URL });

export default class WikiService {
  constructor() {
    console.log("Created a new instance of Agent");
  }

  search = async (query): Promise<IWikiResponse | null> => {
    try {
      const response = await api.get(query);
      return this.transformResponse(response);
    } catch (err) {
      console.log(err);
      return null;
    }
  };
  transformResponse = (response): IWikiResponse => {
    return {
      thumbnailUrl: response.data.thumbnail.source,
      originalImageUrl: response.data.originalimage.source,
      description: response.data.description,
      pageId: response.data.pageid,
      desktopUrl: response.data.content_urls.desktop.page,
      title: response.data.titles.display,
      mobileUrl: response.data.content_urls.mobile.page,
      extract: response.data.extract,
      lang: response.data.lang,
      timestamp: response.data.timestamp,
    };
  };
}
