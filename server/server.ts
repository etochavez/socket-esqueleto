
import express = require('express');
import path = require('path');

export default class Server
{
    public app: express.Application;
    public port: number;

    constructor(puerto: number){
        this.app = express();
        this.port = puerto;
    }

    static init(puerto: number) {
        return new Server(puerto);
    }

    start( callback: Function) {
        this.app.listen( this.port, callback );
        this.publicFolder();
    }

    private publicFolder(){
        const publicPath = path.resolve(__dirname, '../public');
        this.app.use(express.static(publicPath));
    }
}