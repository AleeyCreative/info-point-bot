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
Object.defineProperty(exports, "__esModule", { value: true });
var telegraf_1 = require("telegraf");
var dotenv = __importStar(require("dotenv"));
dotenv.config();
var controllers_1 = require("./controllers");
var botRegex_1 = require("./botRegex");
var bot = new telegraf_1.Telegraf("1846812149:AAHqIstra9oZ-LJn9KGVOXF3FS2JE3deFGQ");
function main() {
    //   Startup, messages and emojis
    bot.start(controllers_1.startController);
    bot.hears(botRegex_1.searchRegex, controllers_1.searchController);
    bot.on("sticker", controllers_1.stickerController);
    // Commands
    // Launching bot
    console.log("Starting bot");
    bot.launch();
}
process.once("SIGINT", function () { return bot.stop("SIGINT"); });
process.once("SIGTERM", function () { return bot.stop("SIGTERM"); });
main();
