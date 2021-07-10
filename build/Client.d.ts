import { Context } from "telegraf";
declare class Client {
    constructor();
    handleSearch(searchString: string): string;
    buildRequestURL(searchString: string, options?: object): string;
    handleStart(ctx: Context): void;
    handleSticker(ctx: Context): void;
    handleMessage(this: Client, ctx: Context): Promise<void>;
}
export default Client;
