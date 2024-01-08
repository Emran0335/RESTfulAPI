import { Request, Response, Router } from "express";

export const router = Router();

router.get("/", (req: Request, res: Response) => {
  console.log("baseURL: ", req.baseUrl)
  res.send({ message: "ok", timestamp: req.timestamp });
  console.log("It will be printed after middlewares!");
});
