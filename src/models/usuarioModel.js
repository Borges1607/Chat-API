const db = require("./db");
async function registrarUsuario(nick) {
    return await db.insertOne("usuario", {"nick":nick});

}

async function insertOne(collection, objeto){
    const db = await Connect();
    return db.collection(collection).insertOne(objeto);
}

module.exports = {registrarUsuario}