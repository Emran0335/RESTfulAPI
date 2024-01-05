import express from "express";
import { healthRouter, calculatorRouter } from "./routers";
import { addTimestamp, errorHandler, logger } from "./middlewares";

const app = express();
const port = 3000;

// for getting json data from the body request as response, as express.js does not support json data.
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// router level middlewares
app.use(addTimestamp);
app.use(logger);

app.use("/health", healthRouter);
app.use("/calculator", calculatorRouter);

// after the middlewares
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// npx means node package execution
