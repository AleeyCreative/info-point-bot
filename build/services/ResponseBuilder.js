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
        return "\n      " + title + "\n      ";
    };
    ResponseBuilder.prototype.formatHits = function (hits) {
        var title = "Results from wikipedia";
        var hint = "Selecting any of the option and I fetch the result for you";
        var body = "";
        hits.forEach(function (hit, index) {
            body += index + ". " + hit.title;
        });
        return "\n    " + title + "\n    " + body + "\n    " + hint + "\n    ";
    };
    return ResponseBuilder;
}());
exports.default = ResponseBuilder;
