var database = require("../database/config");

function atualizarVoto(nome) {
  var instrucaoSql = `
        UPDATE promessas
        SET quantidade = quantidade + 1
        WHERE nome = '${nome}'
    `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarVotos() {
  var instrucaoSql = `SELECT quantidade FROM promessas`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  atualizarVoto,
  buscarVotos,
};
