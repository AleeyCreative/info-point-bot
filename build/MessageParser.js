"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MessageParser = /** @class */ (function () {
    function MessageParser() {
        console.log("Initializing a new message parser");
        this.searchRegex = /(?<=explain\s+).+/is;
        this.greetingRegex = /[hello,hi,hey,what's up]/is;
        this.confusedRegex = /[huh,idk]/is;
    }
    return MessageParser;
}());
exports.default = MessageParser;
