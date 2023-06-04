import Router from 'express';
import userRouter from './routes/batteries.router.js';

const router = Router();
userRouter(router);
export default router;
