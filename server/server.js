import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import route from './route/doctorRoute.js';

const app = express();
app.use(bodyParser.json());
app.use(cors());

dotenv.config();

const PORT  = process.env.PORT || 7000;
const URL = process.env.MONGOURL;

mongoose.connect(URL).then(() => {
  console.log('DB Connected Successfully');
  app.listen(PORT, ()=>{
    console.log(`Listening in Port : ${PORT}`);
  })
}).catch(error=> console.log(error));

app.use('/api', route);