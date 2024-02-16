const express = require('express');
const app = express();
const port = 3000;
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'desafio-nginx-node-db'
};
const mysql = require('mysql');
const connection = mysql.createConnection(config);

app.get('/', (req, res) => {

    const tabela = `CREATE TABLE IF NOT EXISTS people (id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255))`;
    connection.query(tabela);

    // const insere = `INSERT INTO people(name) values ('Iêda')`;
    // connection.query(insere);

    const lista = `SELECT name FROM people ORDER BY name ASC`;
    connection.query(lista, function(err, rows, fields) {
        if (err) throw err;

        let conteudo = `<h1>Desafio Nginx e Node - Full Cycle</h1>`;
        conteudo += `<ul>`
            rows.forEach(objeto => {
                conteudo += `<li>${objeto.name}</li>`;
            });
        conteudo += `</ul>`
        res.send(conteudo);
    });

    connection.end();
});

app.listen(port, () => {
    console.log('Servidor rodando na porta: ' + port);
});