const bcrypt = require('bcrypt')

const criptografarSenha = async (senha) => {
    return await bcrypt.hash(senha, 10)
}

const verificarSenha = async (senha, senhaCriptografada) => {
    return await bcrypt.compare(senha, senhaCriptografada)
}

module.exports = {
    criptografarSenha,
    verificarSenha
}