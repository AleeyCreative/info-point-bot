"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResponseBuilder = /** @class */ (function () {
    function ResponseBuilder() {
        console.log("New instance of ResponseBuilder created...");
    }
    ResponseBuilder.prototype.buildQuestionResponse = function (response) {
        var title = "Response";
        var body = response;
        var link = "link";
        return "\n      " + title + "\n\n      ";
    };
    return ResponseBuilder;
}());
exports.default = ResponseBuilder;
