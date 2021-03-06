import { Context } from "telegraf";
import axios from "axios";
import qs from "qs";
import { request } from "http";

interface IOptions {
  srwhat?: string;
  srlimit?: number;
}

const WIKIBASE_URL =
  "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search";

class Agent {
  constructor() {
    console.log("Created a new instance of Agent");
  }
  buildRequestURL(query: string, options: IOptions | null): string {
    let reqOptions;
    if (!options) {
      reqOptions = {
        srwhat: "text",
        srlimit: 5,
      };
    } else {
      reqOptions = options;
    }
    const params = qs.stringify({ srsearch: query, ...reqOptions });
    const requestURL = `${WIKIBASE_URL}&${params}`;
    return requestURL;
  }
  async makeRequest(this: Agent, query) {
    console.log(`This is the search query: ${query}`);
    const requestURL = this.buildRequestURL(query, null);
    try {
      const response = await axios.get(requestURL);

      const hits = response.data.query.search;
      return hits;
    } catch (e) {
      console.log(e);
    }
  }
}

export default Agent;
