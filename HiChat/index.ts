import express, { Application, raw } from "express";
import cors from "cors";
import { RoutesConfiguration } from "./src/configuration/RoutesConfiguration";
import { router as MessagesRoute } from "./src/routes/MessagesRoute";
import { DatabaseConnection } from "./src/database/DatabaseConnection";

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use(RoutesConfiguration.url, MessagesRoute);

app.listen(RoutesConfiguration.port, () => {
  console.log(`Server listening on port ${RoutesConfiguration.port}`);
});

DatabaseConnection();
