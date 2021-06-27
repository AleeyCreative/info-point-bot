"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MessageParser = /** @class */ (function () {
    function MessageParser() {
        this.searchRegex = /(?<=explain\s+).+/is;
        this.greetingRegex = /[hello,hi,hey,what's up]/is;
        this.confusedRegex = /[huh,idk]/is;
        console.log("Initializing a new message parser");
    }
    MessageParser.prototype.parseSearchKey = function (text) {
        var searchKey = text.match(this.greetingRegex)[0];
        return searchKey;
    };
    return MessageParser;
}());
exports.default = MessageParser;
