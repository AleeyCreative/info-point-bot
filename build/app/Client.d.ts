import { IContext } from "types";
declare class Client {
    constructor();
    handleStart(ctx: IContext): void;
    handleSticker(ctx: IContext): void;
    handleMessage: (ctx: IContext) => Promise<void>;
    searchWiki: (ctx: IContext, query: string) => Promise<void>;
}
export default Client;
