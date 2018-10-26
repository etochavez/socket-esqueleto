
import express = require('express');
import http = require('http');
import socketIO = require('socket.io');
import socket = require('../socket/socket');

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
        this.socket();
    }

    static init(puerto: number) {
        return new Server(puerto);
    }

    start( callback: Function) {
        this.server.listen( this.port, callback );
    }

    socket(){
        const socketObj: socket.default = new socket.default(this.port);
    }
}