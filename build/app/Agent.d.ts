interface IOptions {
    srwhat?: string;
    srlimit?: number;
}
declare class Agent {
    constructor();
    buildRequestURL(query: string, options: IOptions | null): string;
    makeRequest(this: Agent, query: any): Promise<any>;
}
export default Agent;
