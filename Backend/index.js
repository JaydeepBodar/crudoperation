const express = require("express");
const cors=require('cors');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
// connect to mongo db
mongoose.connect(
  process.env.databaseconnect,
  {
    useUnifiedtopology: true,
    useNewurlParser: true,
  },
  () => {
    console.log("database connected successfully");
  }
);
// import rouets
const productroutes=require('./routes/tableroutes')	
// app middleware
app.use(express.json())
app.use(cors())
app.use('/',productroutes)
// app.use('/:userID',productroutes)
app.listen(4000, () => {
  console.log("server start on port no 4000");
});
