"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Client = /** @class */ (function () {
    function Client() {
        console.log("Initialized a new client");
    }
    Client.prototype.handleStart = function (ctx) {
        ctx.reply("Starting application...");
    };
    Client.prototype.handleSticker = function (ctx) {
        ctx.reply("Thanks for the sticker");
    };
    Client.prototype.handleMessage = function (ctx) {
        // const message: string = ctx.message?.message_id || "";
        console.log(ctx.message.text);
        ctx.reply("Awwn! Thank you");
    };
    Client.prototype.handleSearch = function (ctx) {
        console.log(ctx);
        ctx.reply("Let me see, please wait...");
    };
    return Client;
}());
exports.default = Client;
