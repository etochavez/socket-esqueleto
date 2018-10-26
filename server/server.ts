
import express = require('express');
import path = require('path');
import http = require('http');
import socketIO = require('socket.io');

export default class Server
{
    public app: express.Application;
    public port: number;
    public server: http.Server;
    public io: socketIO.Server;

    constructor(puerto: number) {
        this.app = express();
        this.server = http.createServer(this.app);
        this.io = socketIO(this.server);
        this.port = puerto;
    }

    static init(puerto: number) {
        return new Server(puerto);
    }

    start( callback: Function) {
        this.server.listen( this.port, callback );
        this.publicFolder();
    }

    private publicFolder(){
        const publicPath = path.resolve(__dirname, '../public');
        this.app.use(express.static(publicPath));
    }
}