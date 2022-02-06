import express from 'express'
import path from 'path'
import routers from './routers/_router'

const app = express();

app.set('views', path.join('.', '/src/views'));

app.set('view engine', 'ejs');

app.use((req: any,res, next) => {

    req.idUsuario = 1;

    next();
})


app.use(express.json())
app.use(express.urlencoded());

app.use(routers);

app.listen(3000, () => {
    console.log('Rodando na porta 3000');
})
