"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MessageParser = /** @class */ (function () {
    function MessageParser() {
        this.searchRegex = /(?<=explain\s+).+/i;
        this.greetingRegex = /[hello,hi,hey,what's up]/i;
        this.confusedRegex = /[huh,idk]/i;
        console.log("Initializing a new message parser");
    }
    MessageParser.prototype.parseSearchKey = function (text) {
        var matchArray = text.match(this.searchRegex);
        console.log(matchArray);
        return matchArray[0];
    };
    return MessageParser;
}());
exports.default = MessageParser;
