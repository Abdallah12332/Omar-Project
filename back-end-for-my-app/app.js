const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors({
    origin:'*',
    methods:['POST',"GET","OPTIONS"]
}));

app.options("*" ,cors());

const mongoose = require("mongoose");
const Article = require("./Article");

mongoose.connect("mongodb+srv://moragame660:wEf1OkRe6ioTWpRH@cluster0.j74solx.mongodb.net/").then(()=>{console.log("connected")}).catch(()=> console.log("failed"))

app.post('/send/data',async (req,res)=>{
    try{

        res.status(200).send("Data received successfully!")
        const data = req.body;
        console.log("received data:",data)

        const newArticle = new Article();

        const body = req.body;

        newArticle.body= body;

        await newArticle.save().then(()=>console.log("nice")).catch(()=> console.log("sad"))
        
    }
    catch(err){
        console.log("Error in server",  err)
        res.status(500).send(err)
    }

})






let PORT = 10000;

app.listen(PORT,()=>{
    console.log(`listen in ${PORT}`)
})