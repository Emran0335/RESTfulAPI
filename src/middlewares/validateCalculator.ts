import { Request, Response, NextFunction } from "express";
import { CalculatorRequestBody } from "../types";

export function validateCalulatorRequest(
  req: Request<{}, any, CalculatorRequestBody>,
  res: Response,
  next: NextFunction
) {
  const { operator, operand1, operand2 } = req.body;

  if (typeof operand1 !== "number" || typeof operand2 !== "number") {
    return res.status(400).json({
      message: "operand1 and operand2 must be numbers",
    });
  }
  if (
    operator !== "+" &&
    operator !== "-" &&
    operator !== "*" &&
    operator !== "/"
  ) {
    return res.status(400).json({
      message: "operator must be one of +, -, *, /",
    });
  }
  next();
}
