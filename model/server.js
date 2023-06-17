//importando el express
const express = require('express'); 

//imporanto lo que esta en carpeta database y trayendo la configuaracion hecha en config.js
const dbConnection = require('../database/config')

//creamos la clase server
class server {
		
		//contiene un constructor
    constructor() {
        this.app = express();//comunmente se le pone app, pero puede poner lo que quiera
        this.port = process.env.PORT
        this.colegioPath='/api/colegio'
        this.middlewares();
        this.routes();
        this.dbConnection()
    }


    middlewares() {
        this.app.use(express.static(__dirname + '/'));

    }

    routes() {
        this.app.use(this.colegioPath, require('../routes/colegio'));
    }

    async dbConnection() {
        await dbConnection()
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`escuchando por el puerto ${this.port}`)
        })
    }
}

module.exports= server