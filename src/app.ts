import express, { Request, Response, Express } from "express";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send({ error: false, message: "Prisma Doctor Server UP and RUNNING" });
});

export default app;
