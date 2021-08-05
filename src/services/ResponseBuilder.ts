import { Context } from "telegraf";

class ResponseBuilder {
  constructor() {
    console.log("New instance of ResponseBuilder created...");
  }
  buildQuestionResponse(this: ResponseBuilder, response: string) {
    const title: string = "Response";
    const body: string = response;
    const link: string = "link";
    return `
      ${title}
      `;
  }
  formatHits(this: ResponseBuilder, hits): string {
    const title = "Results from wikipedia";
    const hint = "Selecting any of the option and I fetch the result for you";
    let body = "";
    hits.forEach((hit, index) => {
      body += `${index}. ${hit.title}`;
    });
    return `
    ${title}
    ${body}
    ${hint}
    `;
  }
}
export default ResponseBuilder;
