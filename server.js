import express from 'express';
import mongoose from 'mongoose';
import Cards from "./dbCards.js";
import Cors from "cors";
//!aryan:pass

 //?app config
const app= express();
const port=process.env.PORT || 8001;
const connection_url="mongodb+srv://admin:aryan@cluster0.zryzv.mongodb.net/tinderdb?retryWrites=true&w=majority"

//?middleware
app.use(express.json())
app.use(Cors());




//? dB config
mongoose.connect(connection_url)
    // useNewUrlParser:true,
    // useCreateIndex:true,
    // useUnifiedTopology:true,




//? Api endpoints

app.get('/',(req,res)=>res.status(200).send("hello devs!!"));
app.post('/tinder/cards',(req,res)=>{
    const dbCard=req.body;
    Cards.create(dbCard,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })

});
app.get('/tinder/cards',(req,res)=>{
    Cards.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
});


//?Listner 
app.listen(port,()=>console.log(`Listening on localport:${port}`))


