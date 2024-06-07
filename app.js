import express from "express";
import dotenv from "dotenv";
import "./models/index.js";
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import guideRoutes from './routes/guideroute.js';
import bodyParser from 'body-parser';
import {sequelize} from "./models/index.js";
import router from "./routes/allroutes.js";
import cookieParser from "cookie-parser";


dotenv.config();
const app = express();

// Define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'knowledgeLibrary')));

app.use(router);

// Use routes
app.use('/api', guideRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'knowledgeLibrary', 'index.html'));
});



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


 


