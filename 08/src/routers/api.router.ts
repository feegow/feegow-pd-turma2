import {Router} from 'express'
import {ApiRouters as PostRouters} from '../modules/post/post.router'
import {ApiRouters as AuthRouters} from '../modules/auth/auth.router'

const routers = Router();

/**
 * Rotas de Gestão dos Posts
 */
routers.use('/post',PostRouters);
routers.use('/auth',AuthRouters);


export default routers;