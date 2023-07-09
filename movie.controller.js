//find the movies by status....
const Movie = require('../models/movie.model');
exports.findAllMovies =async(req,res)=>{
 
    const {status} = req.query;
    try{
        const Movies = await Movie.find({status});
        res.json(Movies);
    }catch(error){
        res.status(500).json({message:'Error ocuured while fetching the movies',error});
    }
}


//find the movie by id.......

exports.findOne = async(req,res)=>{
    const {id}= req.params;
    try{
        const movie = await Movie.findById(id);
        res.json(movie);
    }catch(error){
        res.status(500).json({message:'Error ocurred',error});
    }
};


//find shows of the specific movies.....
exports.findShows = async(req,res)=>{
    const{id}= req.params;
    try{
        const movie = Movies.findById(id);
        res.json(movie);
    }catch(error){
        res.status(404).json({message:'Not found',error});
    }
};




