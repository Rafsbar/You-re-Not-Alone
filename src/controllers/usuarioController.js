var usuarioModel = require("../models/usuarioModel");

function cadastrar(req, res) {
    var { nomeServer, sobrenomeServer, dddServer, celularServer, emailServer, senhaServer, confirmarServer } = req.body;

    if (!nomeServer || !sobrenomeServer || !dddServer || !celularServer || !emailServer || !senhaServer || !confirmarServer) {
        return res.status(400).send("Todos os campos são obrigatórios!");
    }

    usuarioModel.cadastrar(nomeServer, sobrenomeServer, dddServer, celularServer, emailServer, senhaServer, confirmarServer)
        .then((resultado) => res.json(resultado))
        .catch((erro) => {
            console.error("Erro ao cadastrar:", erro.sqlMessage);
            res.status(500).send("Erro no servidor: " + erro.sqlMessage);
        });
}

module.exports = { cadastrar };
 