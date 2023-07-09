// const Artist = require('./artist.model');
// const Genre = require('./genre.model');
// const Movie= require('./movie.model');
// const User = require('./user.model');


// module.exports ={
// Artist,
// Genre,
// Movie,
// User
// };

import express from express();

const app = express();
const port = 3000;
app.listen(port,()=>{
    console.log(`server ${port}`);
})