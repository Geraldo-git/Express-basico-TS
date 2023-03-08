import express from "express";
const app = express();

app.get('/', (req,res)=>{
res.send('<h1> Hello express<h1>');
});



app.listen(3000, ()=>{
    console.log(" Aplicacao escutando porta 3000");
});
