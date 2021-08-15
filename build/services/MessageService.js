"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var MessageParser = /** @class */ (function () {
    function MessageParser() {
        this.searchRegex = /(?<=explain\s+).+/i;
        this.greetingRegex = /[hello,hi,hey,what's up]/i;
        this.confusedRegex = /[huh,idk]/i;
        this.defaultResponse = "I'm not quite sure I understand what you mean, sorry!";
        this.buildSearchResponse = function (resData) {
            var footMessage = "Enter 1 for disambugation(" + resData.title + ")";
            return "\n    ## " + lodash_1.capitalize(resData.title) + "\n    " + resData.extract + "\n    \n    ----------------------------\n    **" + footMessage + "**\n    ";
        };
        console.log("Initializing a new message parser");
    }
    MessageParser.prototype.isQuestion = function (text) {
        return this.searchRegex.test(text);
    };
    MessageParser.prototype.parseQuestion = function (msg) {
        var matchArray = msg.match(this.searchRegex);
        return matchArray ? matchArray[0] : "";
    };
    return MessageParser;
}());
exports.default = MessageParser;
