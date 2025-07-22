import express, { Express, Request, Response } from "express";
import cors from "cors";

const startServer = (): void => {
  const app: Express = express();

  app.use(cors());
  app.use(express.json());

  app.get("/", (req: Request, res: Response): void => {
    res.json({
      message: "LAST HW_24!",
    });
  });

  app.post("/", (req: Request, res: Response): void => {
    if (!req.body) {
      res.status(400).json({
        message: "Данные не отправлены",
      });
    }
    res.status(201).json(req.body);
  });

  const port: number = Number(process.env.PORT) || 3000;
  app.listen(port, () => console.log(`Server running on http://localhost:${port} `));
};

export default startServer;
