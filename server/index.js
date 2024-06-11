import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import db from "./config/Database.js";
import router from "./routes/index.js";
dotenv.config();
const app = express();
app.use(cors({ credentials: true, origin: 'https://fliandrivkatry1.netlify.app' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

db.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.listen(5000, () => console.log('Server running at port 5000'));
