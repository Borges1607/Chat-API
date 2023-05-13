const salaModel = require('../models/salaModel');

exports.get=() => {
    return await salaModel.listarSalas();
}