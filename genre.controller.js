const Genres = require('../models/genre.model');

exports.findAllGenres = async(req,res)=>{
    try{
        const genres = await Genres.find();
        res.json(genres);
    }catch(error){
        res.status(500).json({message:'Eroor occured while fetching the genres',error});
    }
};


