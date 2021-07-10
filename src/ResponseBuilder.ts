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
}
export default ResponseBuilder;
