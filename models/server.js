const express = require('express');
const cors = require('cors');
class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios'
        this.routes();
    }

    middlewares(){
        this.app.use(cors())

        this.app.user(express.json());

        this.app.use(express.static('public'));
    }

    routes(){
        this.app.user(this.usuariosPath, require('../routes/usuarios'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port', this.port);
        });
    }
}

module.exports = Server;