const fs = require('fs');//consumindo a biblioteca fileSystem

const BD = {
    carregarDados: function () {
        const dados = new String(fs.readFileSync(__dirname + '/dados.csv'));
        const linhas = dados.split('\n');
        const registros = [];
        for (let index = 0; index < linhas.length; index++) {
            const reg = linhas[index];
            if (reg === '') {
                continue;
            }
            const campos = reg.split(';');
            const dt = campos[5].split('/');
            registros.push(
                {
                    id: parseInt(campos[0]),
                    produto: campos[1],
                    vendedor: campos[2],
                    cliente: campos[3],
                    data: new Date(parseInt(dt[2]), parseInt(dt[0])-1, parseInt(dt[1])),
                    valor: parseFloat(campos[4])
                }
            );
        }
        return registros;
    },

    salvarDados: function (vendas, callback) {
        callback();
    }
}


module.exports = BD;//padrão necessário para transformar um arquivo JS em um módulo para ser executado no node.