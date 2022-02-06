import {Router} from 'express'
import apiRouter from './api.router'
import viewRouter from './view.router'

const routers = Router();

/**
 * Rotas da api
 */
routers.use('/api',apiRouter);

/**
 * Rotas de View
 */
routers.use(viewRouter);


export default routers;