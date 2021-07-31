import { Context } from "telegraf";
declare class Client {
    constructor();
    handleStart(ctx: Context): void;
    handleSticker(ctx: Context): void;
    handleMessage(this: Client, ctx: Context): Promise<void>;
}
export default Client;
