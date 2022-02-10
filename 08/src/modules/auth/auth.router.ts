import {Router} from 'express'
import AuthController from './auth.controller'
const ApiRouters = Router();

/**
 * Rotas de API
 */

const authController = new AuthController();

ApiRouters.post('/', authController.Logar);
ApiRouters.post('/validate', authController.ValidateToken);


export {
    ApiRouters  
} ;