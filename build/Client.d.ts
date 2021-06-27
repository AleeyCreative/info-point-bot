import { Context } from "telegraf";
declare class Client {
    constructor();
    handleStart(ctx: Context): void;
    handleSticker(ctx: Context): void;
    handleMessage(ctx: Context): void;
    handleSearch(searchString: string): string;
    buildRequestURL(searchString: string, options?: object): string;
}
export default Client;
