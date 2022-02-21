require('dotenv').config();
const cors = require('cors');
const express = require('express');
const dbConnect = require('../db-config/db');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8080;
        this.middlewares();
        this.routes();
        dbConnect();
    }

    middlewares(){
        this.app.use( express.json() );
        this.app.use( cors() );
    }

    routes() {
        this.app.use('/api', require('../routes/api'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`App working in port ${this.port}`);
        });
    }
}

module.exports = Server;