const dotenv=require('dotenv');
const express=require('express');
const app=express();

app.use(express.json());


dotenv.config({path: './config.env' });
const Port=process.env.PORT;
(require('./Database/Database'))

app.use("/",require('../Server/Router/UserRoute'));
app.use('/',require('../Server/Router/MovieRoute'));

app.listen(4000,()=>{
    console.log(`server run on ${Port}`)
});