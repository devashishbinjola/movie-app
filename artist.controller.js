const Artists = require('../models/artist.model');


exprots.findAllArtists = async(req,res)=>{
   try{
    const artist = await Artists.find();
    res.json(artist);
   }catch(error){
    res.status(500).json({message:'Error occurred while fetching the artists',error});
   }

};