const express=require('express');
const router=express.Router();
const MovieData=require('../Model/MovieSchema');


router.get('/Movies',async(req,res)=>{
    try{
        const Movie=await MovieData.find({})
       
        res.send(Movie)
    } catch(error){
        return res.status(400).json({message:error});
    }
});

module.exports=router;