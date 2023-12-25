const mongoose=require('mongoose');


const MovieSchema=new mongoose.Schema({
    url:{
        type:String,
        required: true
    },
    name:{
        type:String,
        required: true
    },
    Date:{
        type:String,
        required: true
    },
    vanue:{
        type:String,
        required: true
    }
   
})

const MovieUser=mongoose.model('MovieData',MovieSchema);

module.exports=MovieUser;