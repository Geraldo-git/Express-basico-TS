import express, { Request, Response } from "express";
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1> Hello express<h1>');
});

app.post("/api/produto", (req, res) => {
    console.log(req.body);
    return res.send(`Produto adicionado`);
});

app.all("/api/check", (req, res) => {
    if (req.method == "POST") {
        return res.send("Inseriu algum registro");
    } else if (req.method == "GET") {
        return res.send("Leu o registro");
    } else {
        return res.send("Operacao nao autorizada");
    }
});

//===============================================================

app.get("/api/interfaces", (req: Request, res: Response) => {
    return res.send("Utilizando as interfaces");
});

app.get("/api/json", (req: Request, res: Response) => {
    return res.json({
        "name": "Shirt",
        "price": 19.90,
        "size": ["p", "m", "g"]
    })
});

//===========================================================

app.get("/api/produto/:id", (req: Request, res: Response) => {

    const id = req.params.id;

    if (id === "1") {
        const product = {
            id: 1,
            color: "azul",
            name: "bone"
        }
        return res.json(product);
        res.send(`O id enviado foi: ${product}`);
    } else {
        res.send("Produto nao encontrado");
    }
});

//============================Rota mais complexa=======================

app.get("/api/produto/:id/review/:reviewId", (req: Request, res: Response) => {
    console.log(req.params);

    const productId = req.params.id;
    const reviewId = req.params.reviewId;

    res.send(`Os parametros enviados foram: ${productId}  e ${reviewId}`);

});




app.listen(3000, () => {
    console.log(" Aplicacao escutando porta 3000");
});
