"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const middlewares_1 = require("../middlewares");
exports.router = (0, express_1.Router)();
// router level middleware
// router.use(logger);
// path level middleware for business logic
exports.router.get("/", middlewares_1.logger, (req, res) => {
    res.send({
        message: "Get all calculations",
        timestamp: req.timestamp,
        data: [
            { id: 1, result: 1 },
            { id: 2, result: 2 },
        ],
    });
    console.log("It will be printed after middlewares! It is from calculator");
});
exports.router.get("/:id", (req, res) => {
    res.send({
        message: "Get calculation by Id",
        timestamp: req.timestamp,
        id: req.params.id,
        result: 1,
    });
});
exports.router.post("/", middlewares_1.validateCalulatorRequest, (req, res) => {
    const { operator, operand1, operand2 } = req.body;
    let result;
    switch (operator) {
        case "+":
            result = operand1 + operand2;
            break;
        case "-":
            result = operand1 - operand2;
            break;
        case "*":
            result = operand1 * operand2;
            break;
        case "/":
            result = operand1 / operand2;
            break;
        default:
            result = "Invalid operator";
            break;
    }
    res.send({
        message: "Create new calculation",
        timestamp: req.timestamp,
        result: result,
    });
});
