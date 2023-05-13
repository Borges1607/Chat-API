require("dotenv").config(); 
const app = require("../src/api");

app.use((req, res, next)=>{
    next();
});
console.log(process.env.API_PORT);
let port = process.env.API_PORT|| 3001
app.listen(port);

console.log(`listening on ${port}`);

app.use("/entrar",router.post("/entrar", async(req, res, next) => {
    const usuarioController = require("./controllers/usuarioController");
    let resp = await usuarioController.entrar(req.body.nick);
    res.status(200).send(resp);
}))