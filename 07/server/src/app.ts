import express from 'express'
import postRouter from './routers/post.router'
import staticRouter from './routers/static.router'

const app = express();

app.use(express.json());

app.use('/post', postRouter)
app.use(staticRouter)

app.listen(3000, ()=> {
    console.log('Rodando na porta 3000')
})