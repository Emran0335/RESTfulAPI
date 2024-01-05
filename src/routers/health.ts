import { Request, Response, Router } from "express";

export const router = Router();

router.get("/", (req: Request, res: Response) => {
  throw new Error("Something went wrong!");
  res.send({ message: "ok", timestamp: req.timestamp });
  console.log("It will be printed after middlewares!");
});
