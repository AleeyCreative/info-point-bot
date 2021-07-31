"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var telegraf_1 = require("telegraf");
var dotenv = __importStar(require("dotenv"));
dotenv.config();
var Client_1 = __importDefault(require("./Client"));
var registry = __importStar(require("./registry"));
var token = process.env.BOT_TOKEN;
var bot = new telegraf_1.Telegraf(token);
var client = new Client_1.default();
function main() {
    // configure middlewares
    bot.use(telegraf_1.session());
    //   Startup, messages and emojis
    bot.start(client.handleStart);
    bot.on(registry.sticker, client.handleSticker);
    bot.on(registry.message, client.handleMessage);
    // Commands
    // Launching bot
    console.log("Starting bot");
    bot.launch();
}
process.once("SIGINT", function () { return bot.stop("SIGINT"); });
process.once("SIGTERM", function () { return bot.stop("SIGTERM"); });
main();
