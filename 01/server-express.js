const express = require('express')
const app = express();

app.get('/', (req, res) =>{
    res.send('Hello world')
})

app.get('/teste/:par', (req, res) =>{
    res.send('Teste')
})

app.post('/teste', (req, res) =>{
    res.send('Teste')
})

app.listen(3000, () =>{
    console.log('Rodando na porta 3000');
})