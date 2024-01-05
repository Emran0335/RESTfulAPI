"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
function logger(req, res, next) {
    console.log(`${req.timestamp} ${req.method} ${req.ip} ${req.path}`);
    next();
}
exports.logger = logger;
