
import express = require('express');
import http = require('http');
import socketIO = require('socket.io');
import socket from "../socket/socket";

export default class Server
{
    public app: express.Application;
    public port: number;
    public server: http.Server;
    public io: socketIO.Server;
    private static _instance: Server;

    constructor(puerto: number) {
        this.app = express();
        this.server = http.createServer(this.app);
        this.io = socketIO(this.server);
        this.port = puerto;
        const sk = socket.cliente(this.io);
    }

    public static get instance(){
        return this._instance || (this._instance = new this(3000))
    }

    static init(puerto: number) {
        return new Server(puerto);
    }

    start( callback: Function) {
        this.server.listen( this.port, callback );
    }
}