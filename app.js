import express from "express";
import dotenv from "dotenv";
import {sequelize} from "./models/index.js";
import "./models/index.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();


const PORT = 5000;
app.use(express.json());
app.use(cookieParser());

app.get('/test', (req, res) => {
  res.send('Server is working');
});

sequelize.sync().then(() => {
    console.log("Database connected and models synced");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

  })
  .catch((err) => {
    console.error("Failed to sync database models", err);
  });


