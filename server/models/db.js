'use strict';

const Sequelize = require('sequelize')

const sequelize = new Sequelize("db_props", "root", "123456", {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate()
    .then(function() {
        console.log('Connection has beend successfully.')
    }).catch(function() {
        console.log("Erro: Banco de dados não conectado!")
    })


module.exports = sequelize