import { IContext } from "types";
declare class Client {
    private defaultResponse;
    constructor();
    handleStart(ctx: IContext): void;
    handleSticker(ctx: IContext): void;
    handleMessage(this: Client, ctx: IContext): Promise<void>;
    searchWiki(this: Client, query: string, ctx: IContext): Promise<void>;
}
export default Client;
