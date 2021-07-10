import { Context } from "telegraf";
import axios from "axios";
import qs from "qs";

interface IOptions {
  srwhat?: string;
  srlimit?: number;
}

const WIKIBASE_URL =
  "https://en.wikipedia.org/w/api.php?action=query&format=json";
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
    return `${WIKIBASE_URL}params`;
  }
  async makeRequest(this: Agent, query) {
    console.log(`This is the search query: ${query}`);
    const requestURL = this.buildRequestURL(query, null);
    const response = await axios.get(requestURL);
    console.log(response);
  }
}

export default Agent;
