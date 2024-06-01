import express from "express";
import dotenv from "dotenv";
import "./models/index.js";
import bodyParser from 'body-parser';
import {sequelize} from "./models/index.js";
import router from "./routes/allroutes.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(router);

const PORT = process.env.PORT || 3000;


app.get('/test', (req, res) => {
  res.send('Server is working');
});

sequelize.sync({ alter: true }).then(() => {
    console.log("Database connected and models synced");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    
  })
  .catch((err) => {
    console.error("Failed to sync database models", err);
  });


 


