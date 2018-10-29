
import { Router, Request, Response } from 'express';
import socket from "../socket/socket";


const router = Router();

router.get('/', (req: Request, res: Response) => {
    const sk = socket.enviarNotificacion('Mensaje desde el router');
    res.json({
        mensaje: 'Todo está bien!!'
    });
})

export default router;