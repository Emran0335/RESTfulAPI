"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCalulatorRequest = void 0;
function validateCalulatorRequest(req, res, next) {
    const { operator, operand1, operand2 } = req.body;
    if (typeof operand1 !== "number" || typeof operand2 !== "number") {
        return res.status(400).json({
            message: "operand1 and operand2 must be numbers",
        });
    }
    if (operator !== "+" &&
        operator !== "-" &&
        operator !== "*" &&
        operator !== "/") {
        return res.status(400).json({
            message: "operator must be one of +, -, *, /",
        });
    }
    next();
}
exports.validateCalulatorRequest = validateCalulatorRequest;
