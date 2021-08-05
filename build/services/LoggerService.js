"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoggerService = /** @class */ (function () {
    function LoggerService() {
        console.log("New logger instance created");
    }
    LoggerService.prototype.logError = function (error) {
        console.error(error);
    };
    return LoggerService;
}());
exports.default = LoggerService;
