const mongoose = require('mongoose');
const artistSchema = new mongoose.Schema({
    frist_name :{
        type: String,
        required: true
    },
    last_name : {
        type: String,
        required:true
    },
    wiki_url:{
        type : String,
        required:false
    },
    profile_url:{
        type:String,
        required:false
    },
    Movies:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Movie'

    }]

});

const Artist = mongoose.model('artist',artistSchema);
module.exports = Artist;