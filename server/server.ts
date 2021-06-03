import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import colors from 'colors'

// configure colors
colors.enable();

const app = express();
dotenv.config()

// MIDDLEWARES
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT;



app.listen(PORT, () =>
  console.log(`App running on PORT ${PORT}`.underline.cyan.bold)
);
