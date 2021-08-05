interface IOptions {
    srwhat?: string;
    srlimit?: number;
}
export default class WikiService {
    constructor();
    buildRequestURL(query: string, options: IOptions | null): string;
    search(this: WikiService, query: any): Promise<any>;
}
export {};
