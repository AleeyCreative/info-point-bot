"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MessageParser_1 = __importDefault(require("./MessageParser"));
var mp = new MessageParser_1.default();
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
        // Casting to any in order to access 'text' property
        var msg = ctx.message.text;
        console.log(msg);
        var response;
        if (mp.searchRegex.test(msg)) {
            response = this.handleSearch(mp.parseSearchKey(msg));
        }
        ctx.reply(response);
    };
    Client.prototype.handleSearch = function (searchString) {
        return searchString;
    };
    Client.prototype.buildRequestURL = function (searchString, options) {
        var requestURL = "https:api.wikipedia.org/search?word=" + searchString;
        return requestURL;
    };
    return Client;
}());
exports.default = Client;
