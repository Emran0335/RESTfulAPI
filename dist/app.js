"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path = require('path');
const routers_1 = require("./routers");
const middlewares_1 = require("./middlewares");
const app = (0, express_1.default)();
const port = 3000;
// for getting json data from the body request as response, as express.js does not support json data.
app.use(express_1.default.json());
// app.use(express.urlencoded({ extended: true }));
// router level middlewares
app.use(middlewares_1.addTimestamp);
app.use(middlewares_1.logger);
app.use("/health", routers_1.healthRouter);
app.use("/calculator", routers_1.calculatorRouter);
// after the middlewares
app.use(middlewares_1.errorHandler);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
// npx means node package execution
