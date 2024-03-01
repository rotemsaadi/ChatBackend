import express from "express";
import cors from "cors";
import { RoutesConfiguration } from "./src/configuration/RoutesConfiguration";

const app = express();
app.use(cors());
app.use(RoutesConfiguration.url);

app.listen(() => {
  console.log(`Server listening on port ${RoutesConfiguration.port}`);
});
