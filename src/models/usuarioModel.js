var database = require("../database/config");

function cadastrar(nome, sobrenome, ddd, celular, email, senha, confirmar_senha) {
    var instrucaoSql = `
        INSERT INTO usuario (nome, sobrenome, ddd, celular, email, senha, confirmar_senha) 
        VALUES ('${nome}', '${sobrenome}', '${ddd}', '${celular}', '${email}', '${senha}', '${confirmar_senha}');
    `;
    return database.executar(instrucaoSql);
}

module.exports = { cadastrar };
