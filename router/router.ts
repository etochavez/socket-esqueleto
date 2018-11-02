
import { Router, Request, Response } from 'express';
import socket from "../socket/socket";
import Server from '../server/server';


const router = Router();

router.get('/', (req: Request, res: Response) => {
    const server = Server.instance;
    //const sk = socket.enviarNotificacion('Mensaje desde el router', server.io);
    server.io.emit('enviarMensajeServer', { mensaje: "enviarMensajeServer" });
    res.json({
        mensaje: 'Todo está bien!!'
    });
})

export default router;