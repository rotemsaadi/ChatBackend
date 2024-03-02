import mongoose from "mongoose";
import { DatabaseConfiguration } from "../configuration/DatabaseConfiguration";

export const DatabaseConnection = () => {
  mongoose
    .connect(DatabaseConfiguration.url, {
      auth: {
        username: DatabaseConfiguration.username,
        password: DatabaseConfiguration.password,
      },
    })
    .then(() => console.log("Connected to database"))
    .catch((error) => {
      console.error("Error connecting to database:", error.message);
      process.exit(1);
    });
};
