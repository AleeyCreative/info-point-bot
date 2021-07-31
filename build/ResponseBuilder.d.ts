declare class ResponseBuilder {
    constructor();
    buildQuestionResponse(this: ResponseBuilder, response: string): string;
    formatHits(this: ResponseBuilder, hits: any): string;
}
export default ResponseBuilder;
