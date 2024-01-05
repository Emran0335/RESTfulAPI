"use strict";
// sometimes, we want not to send the details of our application and want to over-write the default behaviour
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
function errorHandler(err, req, res, next) {
    console.log(err.stack);
    res.status(500).send(err.message);
}
exports.errorHandler = errorHandler;
