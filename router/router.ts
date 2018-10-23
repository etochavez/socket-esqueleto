
import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.json({
        mensaje: 'Todo está bien!'
    });
})

export default router;