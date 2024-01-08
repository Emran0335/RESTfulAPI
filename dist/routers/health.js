"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
exports.router = (0, express_1.Router)();
exports.router.get("/", (req, res) => {
    console.log("baseURL: ", req.baseUrl);
    res.send({ message: "ok", timestamp: req.timestamp });
    console.log("It will be printed after middlewares!");
});
