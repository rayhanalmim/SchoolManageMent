import express, { Application, Request, Response } from "express";
import cors from "cors";
import { HeaderRoute } from "./app/modules/header/header.route";
import { FooterRoute } from "./app/modules/footer/footer.route";
const app: Application = express();

app.use(express.json());
app.use(cors());

//applications route
app.use("/api/header", HeaderRoute);
app.use("/api/footer", FooterRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Not Found Route Handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.use((err: any, req: Request, res: Response) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "An unexpected error occurred",
  });
});

export default app;
