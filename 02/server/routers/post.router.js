import {Router} from 'express'
import fs from 'fs';

const routers = Router();

routers.get('/', (req, res) => {
    console.log(req.query);
    res.send('Buscar dados por query')
})

routers.post('/', (req, res) => {
    fs.writeFileSync(`./posts/${new Date().getTime()}`, JSON.stringify(req.body));
    

    res.json({ data : "Dados"})
})


routers.get('/:id', (req, res) => {
    console.log(req.params.id);
    res.send('Buscar por ID')
})

routers.put('/:id', (req, res) => {
    console.log('PUT')
    console.log(req.params.id);
    console.log(req.body);
    res.send('Alterar')
})

export default routers