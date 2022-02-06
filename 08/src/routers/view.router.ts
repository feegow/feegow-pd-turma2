import {Router} from 'express'
import {ViewRouters as PostRouters} from '../modules/post/post.router'

const routers = Router();

routers.get('/', (_, res) => {
    res.json({version : '1.0.0'})  
})

routers.use('/post',PostRouters);

routers.get('*', (_, res) => {
    res.statusCode = 404
    res.send('PAGINA NÃO ENCONTRADA :(')  
})


export default routers;