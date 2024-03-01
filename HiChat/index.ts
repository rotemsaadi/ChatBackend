import express, { Application } from "express";
import cors from "cors";
import { RoutesConfiguration } from "./src/configuration/RoutesConfiguration";
import { router as MessagesRoute } from "./src/routes/MessagesRoute";

const app: Application = express();
app.use(cors());
app.use(RoutesConfiguration.url, MessagesRoute);

app.listen(RoutesConfiguration.port, () => {
  console.log(`Server listening on port ${RoutesConfiguration.port}`);
});
