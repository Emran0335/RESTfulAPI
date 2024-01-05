import { Request, Response, Router } from "express";
import { logger, validateCalulatorRequest } from "../middlewares";
import { time } from "console";
import { CalculatorRequestBody } from "../types";

export const router = Router();

// router level middleware
// router.use(logger);

// path level middleware for business logic
router.get("/", logger, (req: Request, res: Response) => {
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

router.get("/:id", (req: Request, res: Response) => {
  res.send({
    message: "Get calculation by Id",
    timestamp: req.timestamp,
    id: req.params.id,
    result: 1,
  });
});

router.post(
  "/",
  validateCalulatorRequest,
  (req: Request<{}, any, CalculatorRequestBody>, res: Response) => {
    const { operator, operand1, operand2 } = req.body;
    let result: number | string;
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
  }
);
