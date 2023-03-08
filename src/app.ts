import express from "express";
const app = express();
app.use(express.json());

app.get('/', (req,res)=>{
res.send('<h1> Hello express<h1>');
});

app.post("/api/produto", (req, res)=>{
    console.log(req.body);
    return res.send(`Produto adicionado`);
});

app.all("/api/check", (req, res) =>{
    if(req.method == "POST"){
       return res.send("Inseriu algum registro");
    }else if (req.method == "GET"){
       return res.send("Leu o registro");
    } else {
       return res.send("Operacao nao autorizada");   
    }
});
app.listen(3000, ()=>{
    console.log(" Aplicacao escutando porta 3000");
});
