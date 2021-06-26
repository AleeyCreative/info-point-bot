import { Context } from "telegraf";
declare class Client {
    constructor();
    handleStart(ctx: Context): void;
    handleSticker(ctx: Context): void;
    handleMessage(ctx: Context): void;
    handleSearch(ctx: Context): void;
}
export default Client;
