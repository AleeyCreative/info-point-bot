"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContextService = /** @class */ (function () {
    function ContextService() {
        console.log("New context service instance created");
    }
    ContextService.prototype.ctxForSearch = function (searchResponse) {
        return searchResponse.title;
    };
    return ContextService;
}());
exports.default = ContextService;
