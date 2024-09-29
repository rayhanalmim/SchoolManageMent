import express, { Application, Request, Response } from "express";
import cors from "cors";
import { HeaderRoute } from "./app/modules/header/header.route";
import { FooterRoute } from "./app/modules/footer/footer.route";
import globalErrorHandler from "./app/middlewares/globalErrorhandler";
import notFound from "./app/middlewares/notFound";
const app: Application = express();

app.use(express.json());
app.use(cors());

//applications route
app.use("/api/header", HeaderRoute);
app.use("/api/footer", FooterRoute);

// application routes
// app.use('/api/v1', router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
