const knex = require('../conexao');
const { criptografarSenha } = require('../intermediarios/bcrypt')

const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body

    if(!nome || !email || !senha){
        return res.status(400).json({ mensagem: 'Digite todos os campos!' })
    }

    try {
        const usuario = {
            nome,
            email,
            senha: criptografarSenha(senha)
        }

        const novoUsuario = await knex('usuarios').insert(usuario).returning(['nome'])

        return res.status(200).json(novoUsuario)
    } 
    catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor' })
    }
}

module.exports = {
    cadastrarUsuario
}