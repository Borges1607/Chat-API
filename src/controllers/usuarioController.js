const token = require("../util/token");
const usuarioModel = require('../models/usuarioModel');

exports.entrar=async(nick) => {
    let resp = await usuaioModel.registrarUsuario(nick);
    if(resp.inserteId){
        return {
            "idUser":resp.insertedId,
            "token": await token.setToken(JSON.stringify(resp.insertedId).replace(/"/g,''),nick),
            "nick":nick
        }
    }
}