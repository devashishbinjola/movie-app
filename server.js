// import express from 'express';
// import { connect } from 'mongoose';
// const app = express();
// const port = 3000;

// import db from "./models";
// db.mongoose.connect("mongodb://127.0.0.1:27017/moivesdb", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log("Connected to the database!");
    
//   })
//   .catch(err => {
//     console.log("Cannot connect to the database!", err);
//     process.exit();
//   });







// app.get('/movies',(req,res)=>{
//     res.send("ALL MOVIES DATA IN JSON FORMAT");
// });

// app.get('/genres',(req,res)=>{
//     res.send("ALL GENRES DATA IN JSON FORMAT");
// });

// app.get('/artists',(req,res)=>{
//     res.send("ALL ARTISTS DATA IN JSON FORMAT");
// });









// import express from 'express';
// import  connectDB from '../moviebooking/config/db.config.js';
// import cors from 'cors';
// //const movieRoutes = require('./routes/movie.routes.js');
// import {Routers} from './routes/movie.routes.js';
// const artistRoutes = require('./routes/artist.routes');
// const genreRoutes = require('./routes/genre.routes');

// const app = express();
// app.use(cors());
// const port = process.env.PORT||'3000';
// const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";
// //database connection.
// connectDB(DATABASE_URL);
// //json
// app.use(express.json());


// //load routes 
// app.use('/api',movie.routes);





import  express from "express";
const app = express();
const port = 3000;
app.listen(port,()=>{
  console.log(`server ${port}`);
})

















app.listen(port,()=>{
    console.log("server is running http://localhost:3000");
});












// const express = require('express')
// const cors = require('cors')
// const app = express();
//  app.use(cors());
// app.get('/',(req,res)=>{
//   res.json({message:"welcome to the movie app booking."});
// })


// app.listen(3000,()=>{
//   console.log("server is running http://localhost:3000");
// })